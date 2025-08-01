"use client";

import { ThemeProvider } from "next-themes";
import * as React from "react";
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
        <React.Suspense>
          <PosthogPageView />
        </React.Suspense>
      </ThemeProvider>
    </CSPostHogProvider>
  );
}
