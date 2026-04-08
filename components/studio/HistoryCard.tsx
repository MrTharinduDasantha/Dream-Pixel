import { GenerationHistorySummaryItem } from "@/lib/types";
import { Button } from "../ui/button";
import { DownloadIcon } from "lucide-react";
import { downloadImageFromUrl } from "@/lib/utils";
import Image from "next/image";

export function HistoryCard({
  item,
  onView,
}: {
  item: GenerationHistorySummaryItem;
  onView: () => void;
}) {
  return (
    <div className="studio-panel-inset studio-history-card overflow-hidden rounded-[1.45rem] border">
      <div className="relative aspect-[1.1] overflow-hidden bg-background/20">
        <Image
          src={item.resultImageUrl}
          alt={`${item.styleLabel} history preview`}
          fill
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-background via-background/55 to-transparent" />
      </div>

      <div className="flex items-center gap-2 px-4 py-4">
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="studio-pill flex-1 rounded-full px-3 py-2 text-xs cursor-pointer"
          onClick={onView}
        >
          View
        </Button>

        <Button
          type="button"
          variant="outline"
          size="sm"
          className="studio-pill rounded-full px-3 py-2 text-xs cursor-pointer"
          aria-label="Download result"
          onClick={() => {
            void downloadImageFromUrl(
              item.resultImageUrl,
              `${item.styleSlug}-result.png`,
            );
          }}
        >
          <DownloadIcon className="size-3.5" />
        </Button>
      </div>
    </div>
  );
}
