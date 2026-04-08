import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { LoaderIcon, WandSparklesIcon } from "lucide-react";

export function GenerateButton({
  disabled,
  isLoading,
}: {
  disabled: boolean;
  isLoading: boolean;
}) {
  return (
    <Button
      type="submit"
      disabled={disabled}
      className={cn(
        "studio-primary-action rounded-full w-full py-5 mt-2 text-xl cursor-pointer",
      )}
    >
      {isLoading ? (
        <>
          <LoaderIcon className="animate-spin size-5" /> Generating...
        </>
      ) : (
        <>
          <WandSparklesIcon className="size-5" /> Generate
        </>
      )}
    </Button>
  );
}
