import { GenerationQuotaSnapshot } from "./generation-quota";
import { OpenAiImageModel } from "./openai-image-models";

export type GenerationHistorySummaryItem = {
  id: string;
  clerkUserId: string;
  originalFileName: string | null;
  sourceImageUrl: string;
  resultImageUrl: string;
  styleSlug: string;
  styleLabel: string;
  model: string;
  promptUsed: string;
  createdAt: Date | string;
};

export type GenerationResult = {
  imageBase64: string;
  mimeType: string;
  model: OpenAiImageModel;
  savedGeneration: GenerationHistorySummaryItem;
  style: {
    slug: string;
    label: string;
  };
  promptUsed: string;
};

export type StudioProps = {
  clerkUserId: string;
  initialHistory: GenerationHistorySummaryItem[];
  initialQuota: GenerationQuotaSnapshot;
};

export type UploadedSource = {
  imageUrl: string;
  originalFileName: string;
  sourceMimeType: string;
};
