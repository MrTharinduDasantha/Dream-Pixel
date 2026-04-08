"use client";

import { StudioProvider } from "@/context/StudioContext";
import { StudioProps } from "@/lib/types";
import { Form } from "./Form";

export default function StudioUi({
  clerkUserId,
  initialHistory,
  initialQuota,
}: StudioProps) {
  return (
    <StudioProvider
      clerkUserId={clerkUserId}
      initialHistory={initialHistory}
      initialQuota={initialQuota}
    >
      <Form />
    </StudioProvider>
  );
}
