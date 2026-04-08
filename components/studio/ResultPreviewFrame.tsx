import { LoaderIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

export function ResultPreviewFrame({
  fallbackAlt,
  fallbackSrc,
  isLoading,
  resultPreview,
}: {
  fallbackAlt: string;
  fallbackSrc: string;
  isLoading: boolean;
  resultPreview: string | null;
}) {
  if (isLoading)
    return (
      <div className="flex h-full flex-col justify-between p-4">
        <Skeleton className="h-full w-full rounded-[1rem]" />
        <div className="mt-4 flex items-center justify-center gap-3 pb-2 text-lg text-muted-foreground">
          <LoaderIcon className="size-5 animate-spin text-primary" />
          Generating...
        </div>
      </div>
    );

  if (resultPreview)
    return (
      <Image
        src={resultPreview}
        alt="Generated styled result"
        fill
        unoptimized
        className="object-cover"
      />
    );

  return (
    <Image src={fallbackSrc} alt={fallbackAlt} fill className="object-cover" />
  );
}
