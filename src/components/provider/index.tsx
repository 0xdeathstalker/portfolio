"use client";

import { ThemeProvider } from "next-themes";
import type * as React from "react";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
