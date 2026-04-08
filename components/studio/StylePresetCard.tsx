import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import Image from "next/image";

export function StylePresetCard({
  isSelected,
  label,
  onSelect,
  thumbnailAlt,
  thumbnailPath,
}: {
  isSelected: boolean;
  label: string;
  onSelect: () => void;
  thumbnailAlt: string;
  thumbnailPath: string;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "studio-panel-inset group relative overflow-hidden rounded-[1.85rem] border text-left",
        isSelected ? "studio-preset-card-selected" : "studio-preset-card",
      )}
    >
      <div className="relative aspect-[0.92] overflow-hidden bg-background/25">
        <Image
          src={thumbnailPath}
          alt={thumbnailAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-background via-background/50 to-transparent" />
        {isSelected ? (
          <div className="studio-primary-action absolute right-3 top-3 flex size-10 items-center justify-center rounded-full text-primary-foreground">
            <CheckIcon className="size-5" />
          </div>
        ) : null}
        <div className="absolute inset-x-0 bottom-0 px-5 pb-5 pt-8">
          <p className="text-[1.05rem] font-semibold text-primary-foreground drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] sm:text-[1.15rem]">
            {label}
          </p>
        </div>
      </div>
    </button>
  );
}
