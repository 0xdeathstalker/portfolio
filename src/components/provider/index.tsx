"use client";

import { ThemeProvider } from "next-themes";
import type * as React from "react";
import PosthogPageView from "@/lib/posthog/posthog-page-vew";
import { CSPostHogProvider } from "@/lib/posthog/posthog-provider";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <CSPostHogProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
      >
        {children}
        <PosthogPageView />
      </ThemeProvider>
    </CSPostHogProvider>
  );
}
