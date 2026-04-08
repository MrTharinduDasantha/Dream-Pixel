import { HOW_IT_WORKS_STEPS, WORKFLOW_STYLE_PREVIEW } from "@/lib/constants";
import { GridBackground } from "./GridBackground";
import { ImagePlusIcon, PaletteIcon, SparklesIcon } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export function HowItWorks() {
  return (
    <GridBackground className="section-shell mt-6 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <section id="how-it-works" className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="hero-pill caps-md inline-flex items-center rounded-full px-4 py-2 text-xs font-medium uppercase text-primary">
            How it works
          </div>

          <h2 className="mt-6 font-sans text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            From original photo to art-directed result.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            A clean four-step workflow designed to feel fast, premium, and
            predictable from the first upload to the final export.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:grid-rows-[1.05fr_0.95fr]">
          <article className="workflow-panel group relative overflow-hidden rounded-[2rem] border border-border/70 p-6 sm:p-8 lg:col-span-5 lg:row-span-2">
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium tracking-wide text-primary">
                    {HOW_IT_WORKS_STEPS[0].step}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                    {HOW_IT_WORKS_STEPS[0].title}
                  </h3>
                </div>
                <div className="how-icon-ring flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <ImagePlusIcon className="size-6" />
                </div>
              </div>

              <div className="relative mb-8 flex min-h-[17rem] flex-1 items-center justify-center overflow-hidden rounded-[1.75rem] border border-border/60 bg-card">
                <div className="absolute size-56 rounded-full border border-border/25" />
                <div className="absolute inset-8 rounded-[1.5rem] border border-dashed border-border/30" />
                <div className="how-icon-ring relative flex size-24 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <ImagePlusIcon className="size-10" />
                </div>
              </div>

              <p className="max-w-md text-base leading-7 text-muted-foreground">
                {HOW_IT_WORKS_STEPS[0].body}
              </p>
            </div>
          </article>

          <article className="workflow-panel relative overflow-hidden rounded-[2rem] border border-border/70 p-6 sm:p-8 lg:col-span-7">
            <div className="relative z-10">
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium tracking-wide text-primary">
                    {HOW_IT_WORKS_STEPS[1].step}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                    {HOW_IT_WORKS_STEPS[1].title}
                  </h3>
                </div>
                <div className="how-icon-ring flex size-14 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                  <PaletteIcon className="size-6" />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {WORKFLOW_STYLE_PREVIEW.map((style, index) => (
                  <div
                    key={style}
                    className={cn(
                      "rounded-[1.5rem] border border-border/60 px-4 py-4",
                      index === 0
                        ? "bg-secondary shadow-lg shadow-primary/10"
                        : "bg-card",
                    )}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-semibold text-foreground">
                        {style}
                      </p>
                      {index === 0 ? (
                        <span className="rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
                          Selected
                        </span>
                      ) : (
                        <span className="rounded-full border border-border/60 px-2.5 py-1 text-xs text-muted-foreground">
                          Preset
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">
                {HOW_IT_WORKS_STEPS[1].body}
              </p>
            </div>
          </article>

          <article className="workflow-panel workflow-panel-featured relative overflow-hidden rounded-[2rem] border border-border/70 p-6 sm:p-8 lg:col-span-7">
            <div className="relative z-10">
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium tracking-wide text-primary">
                    {HOW_IT_WORKS_STEPS[2].step}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                    {HOW_IT_WORKS_STEPS[2].title}
                  </h3>
                </div>
                <div className="how-icon-ring flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <SparklesIcon className="size-6" />
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-border/60 bg-card p-5">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="caps-sm text-sm uppercase text-muted-foreground">
                      Engine status
                    </p>
                    <p className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                      Protecting identity and composition
                    </p>
                  </div>
                  <Button
                    size="sm"
                    className="pointer-events-none rounded-full shadow-lg shadow-primary/20"
                    tabIndex={-1}
                    type="button"
                  >
                    AI Rendering
                  </Button>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
                  <div className="h-3 overflow-hidden rounded-full bg-secondary/70">
                    <div className="h-full w-[78%] rounded-full bg-primary" />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    78% complete
                  </div>
                </div>
              </div>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">
                {HOW_IT_WORKS_STEPS[2].body}
              </p>
            </div>
          </article>
        </div>
      </section>
    </GridBackground>
  );
}
