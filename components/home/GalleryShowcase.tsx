"use client";

import {
  GALLERY_IMAGES,
  GALLERY_STATS,
  HIGHLIGHTS,
  SHOWCASE_BG_VIDEO_SRC,
} from "@/lib/constants";
import { Show, SignUpButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

export function GalleryShowcase() {
  return (
    <section
      id="styles"
      className="section-shell relative mt-6 overflow-hidden px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-20"
    >
      <video
        className="hero-video pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-center"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden
      >
        <source src={SHOWCASE_BG_VIDEO_SRC} type="video/mp4" />
      </video>
      <div
        className="showcase-surface pointer-events-none absolute inset-0 z-1"
        aria-hidden="true"
      />
      <div
        className="showcase-pattern pointer-events-none absolute inset-0 z-2 opacity-70"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="showcase-panel relative overflow-hidden rounded-[2rem] border border-border/70 p-6 sm:p-8 lg:p-10">
          <div className="showcase-glow absolute -left-14 top-8 size-36 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="grid gap-3 sm:grid-cols-4">
              {HIGHLIGHTS.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-[1.4rem] border border-border/60 bg-card px-4 py-5 text-center"
                  >
                    <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-primary/14 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <p className="mt-4 text-sm tracking-wide text-muted-foreground">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10">
              <p className="caps-lg font-mono text-xs font-medium uppercase tracking-[0.24em] text-primary sm:text-sm">
                Style showcase
              </p>
              <h2 className="mt-5 font-mono text-5xl font-normal leading-[1.02] tracking-[-0.03em] text-foreground sm:text-6xl lg:text-7xl">
                Transform{" "}
                <span className="font-medium text-primary">photos</span>
                <br />
                into art.
              </h2>
              <p className="mt-6 max-w-xl font-mono text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base">
                Turn everyday portraits and moments into richly styled scenes
                with cinematic depth, warm character, and a premium editorial
                finish.
              </p>
            </div>

            <div className="mt-10 grid gap-4 border-y border-border/60 py-6 sm:grid-cols-3">
              {GALLERY_STATS.map((stat) => (
                <div key={stat.label} className="space-y-2">
                  <p className="text-4xl font-semibold tracking-tight text-primary">
                    {stat.value}
                  </p>
                  <p className="caps-xs text-sm uppercase text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Show when="signed-out">
                <SignUpButton mode="modal" fallbackRedirectUrl="/studio">
                  <Button
                    size="lg"
                    className="rounded-2xl px-7 text-base shadow-lg shadow-primary/20 cursor-pointer"
                  >
                    Transform Photos
                  </Button>
                </SignUpButton>
              </Show>

              <Show when="signed-in">
                <Button
                  asChild
                  size="lg"
                  className="rounded-2xl px-7 text-base shadow-lg shadow-primary/20"
                >
                  <Link href="/studio" prefetch={false}>
                    Transform Photos
                  </Link>
                </Button>
              </Show>
            </div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
          className="showcase-frame relative rounded-[2.25rem] border border-border/60 p-4 sm:p-5"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {GALLERY_IMAGES.map((image, index) => (
              <div
                key={image.src}
                className={`showcase-image-card overflow-hidden rounded-[1.8rem] border border-border/60 ${
                  index % 2 === 0 ? "sm:translate-y-6" : ""
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={1200}
                  className="h-full w-full object-cover"
                  priority={index < 2}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
