export interface ExternalPost {
  title: string;
  url: string;
  publishedAt: string;
  source: "Dev.to" | "Medium" | "Substack";
}

/**
 * Fetch recent articles from the Dev.to API.
 */
async function fetchDevToPosts(
  username: string,
  count: number
): Promise<ExternalPost[]> {
  try {
    const res = await fetch(
      `https://dev.to/api/articles?username=${username}&per_page=${count}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const articles = await res.json();
    return articles.map(
      (a: {
        title: string;
        url: string;
        published_at: string;
      }) => ({
        title: a.title,
        url: a.url,
        publishedAt: a.published_at,
        source: "Dev.to" as const,
      })
    );
  } catch {
    return [];
  }
}

/**
 * Parse RSS XML and extract items.
 */
function parseRssItems(
  xml: string,
  count: number
): { title: string; link: string; pubDate: string }[] {
  const items: { title: string; link: string; pubDate: string }[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;
  while ((match = itemRegex.exec(xml)) !== null && items.length < count) {
    const itemXml = match[1];

    const titleMatch = itemXml.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/) ||
      itemXml.match(/<title>([\s\S]*?)<\/title>/);
    const linkMatch = itemXml.match(/<link>([\s\S]*?)<\/link>/);
    const pubDateMatch = itemXml.match(/<pubDate>([\s\S]*?)<\/pubDate>/);

    if (titleMatch && linkMatch) {
      items.push({
        title: titleMatch[1].trim(),
        link: linkMatch[1].trim(),
        pubDate: pubDateMatch ? pubDateMatch[1].trim() : "",
      });
    }
  }
  return items;
}

/**
 * Fetch recent articles from a Medium RSS feed.
 */
async function fetchMediumPosts(
  username: string,
  count: number
): Promise<ExternalPost[]> {
  try {
    const res = await fetch(`https://medium.com/feed/${username}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const items = parseRssItems(xml, count);
    return items.map((item) => ({
      title: item.title,
      url: item.link,
      publishedAt: item.pubDate,
      source: "Medium" as const,
    }));
  } catch {
    return [];
  }
}

/**
 * Fetch recent articles from a Substack RSS feed.
 * Substack username format: "lifestyletinkerer" → lifestyletinkerer.substack.com/feed
 */
async function fetchSubstackPosts(
  subdomain: string,
  count: number
): Promise<ExternalPost[]> {
  try {
    const res = await fetch(`https://${subdomain}.substack.com/feed`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const items = parseRssItems(xml, count);
    return items.map((item) => ({
      title: item.title,
      url: item.link,
      publishedAt: item.pubDate,
      source: "Substack" as const,
    }));
  } catch {
    return [];
  }
}

/**
 * Fetch the most recent posts from all external blog platforms.
 * Returns them sorted by date (newest first).
 */
export async function fetchAllExternalPosts(
  postsPerSource: number = 2
): Promise<ExternalPost[]> {
  const [devto, medium, substack] = await Promise.all([
    fetchDevToPosts("romantictinkerer", postsPerSource),
    fetchMediumPosts("@romantictinkerer", postsPerSource),
    fetchSubstackPosts("lifestyletinkerer", postsPerSource),
  ]);

  const all = [...devto, ...medium, ...substack];

  return all.sort((a, b) => {
    const dateA = new Date(a.publishedAt).getTime();
    const dateB = new Date(b.publishedAt).getTime();
    if (isNaN(dateA) && isNaN(dateB)) return 0;
    if (isNaN(dateA)) return 1;
    if (isNaN(dateB)) return -1;
    return dateB - dateA;
  });
}
