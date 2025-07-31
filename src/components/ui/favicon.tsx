"use client";

import { useTheme } from "next-themes";
import * as React from "react";

export default function DynamicFavicon() {
  const { theme, resolvedTheme } = useTheme();

  React.useEffect(() => {
    // waiting for theme to be resolved; handling hydration delay
    const currentTheme = resolvedTheme || theme;

    if (!currentTheme) {
      return;
    }

    // removing all favicons links
    const existingLinks = document.querySelectorAll("link[rel*='icon']");
    existingLinks.forEach((link) => link.remove());

    // creating new favicon with cache busting strategy
    const newLink = document.createElement("link");
    newLink.rel = "icon";
    newLink.type = "image/x-icon";

    const faviconPath = currentTheme === "dark" ? "/images/favicon-dark.ico" : "/images/favicon-light.ico";

    // adding timestamp to prevent caching
    newLink.href = `${faviconPath}?t=${Date.now()}`;

    document.head.appendChild(newLink);

    // forcing browser to render updated favicon
    setTimeout(() => {
      newLink.href = faviconPath;
    }, 100);
  }, [theme, resolvedTheme]);

  return null;
}
