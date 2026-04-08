import { cn } from "@/lib/utils";

export function GridBackground({
  className,
  children,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      {...props}
      className={cn("relative w-full overflow-hidden", className)}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, color-mix(in oklab, var(--border) 34%, transparent) 1px, transparent 1px),
            linear-gradient(to bottom, color-mix(in oklab, var(--border) 34%, transparent) 1px, transparent 1px),
            radial-gradient(circle at 50% 20%, color-mix(in oklab, var(--primary) 22%, transparent) 0%, color-mix(in oklab, var(--accent) 10%, transparent) 36%, transparent 70%)
          `,
          backgroundSize: "44px 44px, 44px 44px, 100% 100%",
        }}
      />
      {children}
    </div>
  );
}
