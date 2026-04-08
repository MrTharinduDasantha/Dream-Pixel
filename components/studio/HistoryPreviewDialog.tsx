import { GenerationHistorySummaryItem } from "@/lib/types";
import { Button } from "../ui/button";
import { DownloadIcon, XIcon } from "lucide-react";
import { downloadImageFromUrl, formatHistoryDate } from "@/lib/utils";
import {
  type OpenAiImageModel,
  openAiImageModelLabels,
} from "@/lib/openai-image-models";
import Image from "next/image";

export function HistoryPreviewDialog({
  item,
  onClose,
}: {
  item: GenerationHistorySummaryItem;
  onClose: () => void;
}) {
  function HistoryMetaRow({ label, value }: { label: string; value: string }) {
    return (
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm text-muted-foreground">{label}</span>
        <span className="max-w-[14rem] truncate text-sm font-medium text-foreground">
          {value}
        </span>
      </div>
    );
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/78 px-4 py-6 backdrop-blur-md">
      <div className="studio-panel relative max-h-[92vh] w-full max-w-5xl overflow-auto rounded-[2rem] border p-5 sm:p-6">
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label="Close history preview"
          onClick={onClose}
          className="studio-pill absolute right-4 top-4 size-10 rounded-full border"
        >
          <XIcon className="size-4" />
        </Button>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
          <div className="rounded-[1.6rem] border border-border/30 bg-background/18 p-4">
            <div className="relative aspect-[0.95] overflow-hidden rounded-[1.25rem] bg-background/20">
              <Image
                src={item.resultImageUrl}
                alt={`${item.styleLabel} large preview`}
                fill
                unoptimized
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <p className="caps-sm text-sm uppercase text-primary">
                History Preview
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                {item.styleLabel}
              </h3>
              <p className="mt-2 text-base text-muted-foreground">
                Saved generation details for this result.
              </p>
            </div>

            <div className="grid gap-3 rounded-[1.6rem] border border-border/30 bg-background/18 p-5">
              <HistoryMetaRow
                label="Model"
                value={
                  openAiImageModelLabels[item.model as OpenAiImageModel] ??
                  item.model
                }
              />
              <HistoryMetaRow
                label="Generated"
                value={formatHistoryDate(item.createdAt)}
              />
              <HistoryMetaRow label="Style" value={item.styleLabel} />
              <HistoryMetaRow
                label="Source File"
                value={item.originalFileName ?? "Uploaded image"}
              />
            </div>

            <div className="mt-auto flex items-center gap-3">
              <Button
                type="button"
                className="studio-primary-action flex-1 gap-2 rounded-full px-4 py-3 text-sm font-semibold cursor-pointer"
                onClick={() => {
                  void downloadImageFromUrl(
                    item.resultImageUrl,
                    `${item.styleSlug}-result.png`,
                  );
                }}
              >
                <DownloadIcon className="size-4" />
                Download Result
              </Button>
              <Button
                variant="outline"
                className="studio-pill rounded-full px-4 py-3 text-sm cursor-pointer"
                onClick={onClose}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
