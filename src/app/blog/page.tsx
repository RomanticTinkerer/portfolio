import BlurFade from "@/components/magicui/blur-fade";
import { allPosts } from "content-collections";
import Link from "next/link";
import type { Metadata } from "next";
import { paginate, normalizePage } from "@/lib/pagination";
import { fetchAllExternalPosts } from "@/lib/external-posts";
import { ChevronRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on software development, life, and more.",
  openGraph: {
    title: "Blog",
    description: "Thoughts on software development, life, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description: "Thoughts on software development, life, and more.",
  },
};

const PAGE_SIZE = 5;
const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;

  const posts = allPosts;
  const sortedPosts = [...posts].sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });

  const totalPages = Math.ceil(sortedPosts.length / PAGE_SIZE);
  const currentPage = normalizePage(pageParam, totalPages);
  const { items: paginatedPosts, pagination } = paginate(sortedPosts, {
    page: currentPage,
    pageSize: PAGE_SIZE,
  });

  const externalPosts = await fetchAllExternalPosts(2);

  return (
    <section id="blog">
      {/* Header */}
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-2xl font-semibold tracking-tight mb-8">Blog</h1>
      </BlurFade>

      {/* Blog platform descriptions with inline links */}
      <div className="flex flex-col gap-6 mb-12">
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Where I bawl about real-life scenarios AND my heart out:{" "}
            <a
              href="https://medium.com/@romantictinkerer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-foreground hover:underline underline-offset-4 transition-colors group"
            >
              Medium
              <ArrowUpRight className="size-3 opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden />
            </a>
          </p>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Where I talk about tech and more:{" "}
            <a
              href="https://dev.to/romantictinkerer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-foreground hover:underline underline-offset-4 transition-colors group"
            >
              Dev.to
              <ArrowUpRight className="size-3 opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden />
            </a>
          </p>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Where I talk about common household staples and my recipes:{" "}
            <a
              href="https://substack.com/@lifestyletinkerer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-foreground hover:underline underline-offset-4 transition-colors group"
            >
              Substack
              <ArrowUpRight className="size-3 opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden />
            </a>
          </p>
        </BlurFade>
      </div>

      {/* Recent external posts */}
      {externalPosts.length > 0 && (
        <div className="mb-12">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-lg font-semibold tracking-tight mb-6">Recent</h2>
          </BlurFade>
          <div className="flex flex-col gap-4">
            {externalPosts.map((post, idx) => (
              <BlurFade key={post.url} delay={BLUR_FADE_DELAY * 6 + idx * 0.05}>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-x-3 group cursor-pointer py-2"
                >
                  <span className="text-[10px] font-mono tabular-nums uppercase tracking-wider text-muted-foreground mt-[5px] w-16 flex-none">
                    {post.source}
                  </span>
                  <div className="flex flex-col gap-y-1 flex-1 min-w-0">
                    <p className="tracking-tight text-sm font-medium truncate">
                      <span className="group-hover:text-foreground transition-colors">
                        {post.title}
                        <ArrowUpRight
                          className="ml-1 inline-block size-3 text-muted-foreground opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                          aria-hidden
                        />
                      </span>
                    </p>
                    {post.publishedAt && (
                      <p className="text-xs text-muted-foreground">
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                    )}
                  </div>
                </a>
              </BlurFade>
            ))}
          </div>
        </div>
      )}

      {/* Local blog posts */}
      {paginatedPosts.length > 0 ? (
        <>
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <h2 className="text-lg font-semibold tracking-tight mb-6">
              Posts{" "}
              <span className="ml-1 bg-card border border-border rounded-md px-2 py-1 text-muted-foreground text-sm">
                {sortedPosts.length}
              </span>
            </h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="flex flex-col gap-5">
              {paginatedPosts.map((post, id) => {
                const slug = post._meta.path.replace(/\.mdx$/, "");
                const indexNumber = (pagination.page - 1) * PAGE_SIZE + id + 1;
                return (
                  <BlurFade delay={BLUR_FADE_DELAY * 10 + id * 0.05} key={slug}>
                    <Link
                      className="flex items-start gap-x-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      href={`/blog/${slug}`}
                    >
                      <span className="text-xs font-mono tabular-nums font-medium mt-[5px]">
                        {String(indexNumber).padStart(2, "0")}.
                      </span>
                      <div className="flex flex-col gap-y-2 flex-1">
                        <p className="tracking-tight text-lg font-medium">
                          <span className="group-hover:text-foreground transition-colors">
                            {post.title}
                            <ChevronRight
                              className="ml-1 inline-block size-4 stroke-3 text-muted-foreground opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                              aria-hidden
                            />
                          </span>
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {post.publishedAt}
                        </p>
                      </div>
                    </Link>
                  </BlurFade>
                );
              })}
            </div>
          </BlurFade>

          {/* Pagination Controls */}
          {pagination.totalPages > 1 && (
            <BlurFade delay={BLUR_FADE_DELAY * 12}>
              <div className="flex gap-3 flex-row items-center justify-between mt-8">
                <div className="text-sm text-muted-foreground">
                  Page {pagination.page} of {pagination.totalPages}
                </div>
                <div className="flex gap-2 sm:justify-end">
                  {pagination.hasPreviousPage ? (
                    <Link
                      href={`/blog?page=${pagination.page - 1}`}
                      className="h-8 w-fit px-2 flex items-center justify-center text-sm border border-border rounded-lg hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      Previous
                    </Link>
                  ) : (
                    <span className="h-8 w-fit px-2 flex items-center justify-center text-sm border border-border rounded-lg opacity-50 cursor-not-allowed">
                      Previous
                    </span>
                  )}
                  {pagination.hasNextPage ? (
                    <Link
                      href={`/blog?page=${pagination.page + 1}`}
                      className="h-8 w-fit px-2 flex items-center justify-center text-sm border border-border rounded-lg hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      Next
                    </Link>
                  ) : (
                    <span className="h-8 w-fit px-2 flex items-center justify-center text-sm border border-border rounded-lg opacity-50 cursor-not-allowed">
                      Next
                    </span>
                  )}
                </div>
              </div>
            </BlurFade>
          )}
        </>
      ) : (
        <BlurFade delay={BLUR_FADE_DELAY * 8}>
          <div className="flex flex-col items-center justify-center py-12 px-4 border border-border rounded-xl">
            <p className="text-muted-foreground text-center">
              No blog posts yet. Check back soon!
            </p>
          </div>
        </BlurFade>
      )}
    </section>
  );
}
