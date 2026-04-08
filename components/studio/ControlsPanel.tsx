"use client";

import { useStudio } from "@/context/StudioContext";
import {
  ChevronDownIcon,
  RefreshCcwIcon,
  SparklesIcon,
  UploadIcon,
} from "lucide-react";
import { Button, buttonVariants } from "../ui/button";
import { stylePresets } from "@/lib/style-presets";
import { StylePresetCard } from "./StylePresetCard";
import {
  openAiImageModelLabels,
  openAiImageModels,
  type OpenAiImageModel,
} from "@/lib/openai-image-models";
import { cn } from "@/lib/utils";
import { GenerateButton } from "./GenerateButton";
import Link from "next/link";

export function ControlsPanel() {
  const {
    error,
    file,
    inputId,
    isGenerateDisabled,
    isLoading,
    quota,
    replaceFile,
    selectedModel,
    selectedStyle,
    selectModel,
    selectStyle,
  } = useStudio();
  return (
    <section className="studio-panel rounded-[2rem] border p-5 sm:p-7">
      <div className="flex items-start gap-4">
        <div className="studio-panel-inset flex size-[4.5rem] shrink-0 items-center justify-center rounded-[1.65rem] border text-primary">
          <UploadIcon className="size-8" />
        </div>
        <div className="pt-1">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-[2.4rem]">
            Create a styled result
          </h1>
          <p className="mt-2 max-w-2xl text-base text-muted-foreground sm:text-xl">
            Upload an image, choose a style, and generate a new result.
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2 rounded-[1.35rem] border border-border/45 bg-background/25 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2 text-sm font-medium text-foreground">
          <span className="tabular-nums text-lg font-semibold text-primary">
            {quota.remaining}
          </span>{" "}
          generations left
          <span className="font-normal text-muted-foreground">
            {" "}
            ({quota.used} of {quota.limit} used this month)
          </span>
        </p>
        {quota.remaining <= 0 ? (
          <Button className="text-sm font-medium" asChild>
            <Link href="/#pricing">View plans</Link>
          </Button>
        ) : null}
      </div>

      <div className="studio-panel-inset mt-7 rounded-[1.8rem] border p-5 sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <p className="text-[1.05rem] font-semibold text-foreground sm:text-[1.2rem]">
            1. Upload image
          </p>
          {file ? (
            <Button
              variant="outline"
              size="sm"
              className="studio-pill gap-2 rounded-full px-3.5 py-1.5 text-xs"
              asChild
            >
              <label htmlFor={inputId} className="cursor-pointer">
                <RefreshCcwIcon className="size-4" />
                Change
              </label>
            </Button>
          ) : null}
        </div>

        <input
          id={inputId}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          className="sr-only"
          onClick={(e) => {
            e.currentTarget.value = "";
          }}
          onChange={(e) => replaceFile(e.target.files?.[0] ?? null)}
        />

        <div className="mt-5 flex flex-col gap-4 rounded-[1.45rem] border border-border/35 bg-background/22 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <Button
              className="studio-primary-action rounded-full p-5 text-base font-semibold"
              asChild
            >
              <label htmlFor={inputId} className="cursor-pointer">
                {file ? "Replace Image" : "Upload Image"}
              </label>
            </Button>
            <p className="max-w-xl text-lg text-muted-foreground">
              {file ? file.name : "Choose a JPG, PNG, or WEBP file to begin."}
            </p>
          </div>
        </div>

        <p className="mt-5 text-sm text-muted-foreground">
          Supports JPG, PNG, and WEBP via ImageKit upload.
        </p>
      </div>

      <div className="mt-7">
        <p className="text-[1.05rem] font-semibold text-foreground sm:text-[1.2rem]">
          2. Choose a style
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {stylePresets.map((preset) => (
            <StylePresetCard
              key={preset.slug}
              isSelected={preset.slug === selectedStyle}
              label={preset.label}
              onSelect={() => selectStyle(preset.slug)}
              thumbnailAlt={preset.thumbnailAlt}
              thumbnailPath={preset.thumbnailPath}
            />
          ))}
        </div>
      </div>

      <div className="studio-panel-inset mt-7 rounded-[1.8rem] border p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[1.05rem] font-semibold text-foreground">
            3. OpenAI model
          </p>
          <SparklesIcon className="size-4 text-primary" />
        </div>

        <div className="mt-4 relative">
          <select
            value={selectedModel}
            onChange={(event) =>
              selectModel(event.target.value as OpenAiImageModel)
            }
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-auto w-full appearance-none rounded-[1.2rem] border-border/35 bg-background/25 px-4 py-3 pr-11 font-medium focus:border-primary",
            )}
          >
            {openAiImageModels.map((model) => (
              <option key={model} value={model}>
                {openAiImageModelLabels[model]}
              </option>
            ))}
          </select>
          <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        </div>

        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Only image-edit-capable OpenAI models are shown here, so generation
          stays compatible with your uploaded-image workflow.
        </p>
      </div>

      <p className="mt-6 max-w-2xl text-xl leading-8 text-muted-foreground">
        A first version will be generated right away. You can refine it further
        if needed.
      </p>

      <GenerateButton disabled={isGenerateDisabled} isLoading={isLoading} />

      <p className="mt-5 text-center text-lg text-muted-foreground">
        Styling is powered by OpenAI image edits.
      </p>

      {error ? (
        <div className="mt-5 rounded-[1.3rem] border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}
        </div>
      ) : null}
    </section>
  );
}
