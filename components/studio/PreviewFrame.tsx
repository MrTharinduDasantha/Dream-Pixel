import type { ReactNode } from "react";

export function PreviewFrame({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  const previewFrameClassName =
    "relative mt-5 aspect-[0.82] overflow-hidden rounded-[1.45rem] bg-background/28";
  return (
    <>
      <p className="caps-xl text-xs font-semibold uppercase text-muted-foreground">
        {label}
      </p>
      <div className={previewFrameClassName}>{children}</div>
    </>
  );
}
