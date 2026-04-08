"use client";

import { useStudio } from "@/context/StudioContext";
import { ControlsPanel } from "./ControlsPanel";
import { PreviewPanel } from "./PreviewPanel";
import { HistoryPreviewDialog } from "./HistoryPreviewDialog";

export function Form() {
  const { handleSubmit, viewedHistoryItem, closeHistoryPreview } = useStudio();

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-6 items-start lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] xl:gap-8"
    >
      <ControlsPanel />
      <PreviewPanel />

      {viewedHistoryItem && (
        <HistoryPreviewDialog
          item={viewedHistoryItem}
          onClose={closeHistoryPreview}
        />
      )}
    </form>
  );
}
