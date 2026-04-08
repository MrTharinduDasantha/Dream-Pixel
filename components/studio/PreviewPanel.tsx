import { useStudio } from "@/context/StudioContext";
import { CircleDotIcon } from "lucide-react";
import { Button } from "../ui/button";
import { PreviewFrame } from "./PreviewFrame";
import { ResultPreviewFrame } from "./ResultPreviewFrame";
import { HistoryCard } from "./HistoryCard";
import Image from "next/image";

export function PreviewPanel() {
  const {
    history,
    isLoading,
    openHistoryPreview,
    resultPreview,
    selectedPreset,
    sourcePreview,
  } = useStudio();
  return (
    <section className="studio-panel rounded-[2rem] border p-5 sm:p-7">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground">
          Preview
        </h2>
        <p className="mt-2 text-base text-muted-foreground sm:text-xl">
          See the original and the generated result side by side.
        </p>
      </div>

      <div className="studio-panel-inset mt-7 rounded-[1.9rem] border p-5 sm:p-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-0">
          <div className="pr-0 md:border-r md:border-border/30 md:pr-6">
            <PreviewFrame label="Original">
              {sourcePreview ? (
                <Image
                  src={sourcePreview}
                  alt="Uploaded source preview"
                  fill
                  unoptimized
                  className="object-cover"
                />
              ) : (
                <Image
                  src="/original.png"
                  alt="Original example preview"
                  fill
                  className="object-cover"
                />
              )}
            </PreviewFrame>
          </div>

          <div className="pl-0 md:pl-6">
            <PreviewFrame label="Result">
              <ResultPreviewFrame
                fallbackAlt={selectedPreset.thumbnailAlt}
                fallbackSrc={selectedPreset.thumbnailPath}
                isLoading={isLoading}
                resultPreview={resultPreview}
              />
            </PreviewFrame>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-start gap-3 text-lg text-muted-foreground">
        <CircleDotIcon className="mt-1 size-5 shrink-0 text-primary" />
        <p>The result is generated directly with an OpenAI style transfer.</p>
      </div>

      <div className="studio-panel-inset mt-8 rounded-[1.9rem] border p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-foreground">History</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Your saved generations are private to your account.
            </p>
          </div>
          <Button
            variant="outline"
            type="button"
            tabIndex={-1}
            className="studio-pill pointer-events-none rounded-full px-4 py-2 text-sm"
          >
            {history.length} saved
          </Button>
        </div>

        {history.length ? (
          <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {history.map((item) => (
              <HistoryCard
                key={item.id}
                item={item}
                onView={() => openHistoryPreview(item)}
              />
            ))}
          </div>
        ) : (
          <div className="mt-5 rounded-[1.4rem] border border-dashed border-border/35 bg-background/15 px-4 py-6 text-sm text-muted-foreground">
            Your generation history will appear here after your first successful
            result.
          </div>
        )}
      </div>
    </section>
  );
}
