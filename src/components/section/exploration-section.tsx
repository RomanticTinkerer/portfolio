import BlurFade from "@/components/magicui/blur-fade";
import BorderGlow from "@/components/magicui/border-glow";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function ExplorationSection() {
  return (
    <section id="exploration" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Exploration</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Self-Driven Exploration</h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              Things I explore on my own time, driven by curiosity and passion.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr">
          {DATA.explorations.map((exploration, id) => (
            <BlurFade
              key={exploration.title}
              delay={BLUR_FADE_DELAY * 14 + id * 0.05}
              className="h-full"
            >
              <BorderGlow
                borderRadius={12}
                glowRadius={30}
                glowIntensity={0.8}
                edgeSensitivity={25}
                coneSpread={30}
                backgroundColor="hsl(var(--background))"
                colors={["#c084fc", "#f472b6", "#38bdf8"]}
              >
                <div className="p-6 flex flex-col gap-3">
                  <h3 className="font-semibold">{exploration.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exploration.description}
                  </p>
                </div>
              </BorderGlow>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
