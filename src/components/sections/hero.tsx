"use client";

import { portfolio } from "@/lib/config/site-data";
import Socials from "./socials";
import * as React from "react";

export default function Hero() {
  React.useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      switch (event.key.toLowerCase()) {
        case "h":
          event.preventDefault();
          document
            .getElementById("hero")
            ?.scrollIntoView({ behavior: "smooth" });
          break;
        case "p":
          event.preventDefault();
          document
            .getElementById("work")
            ?.scrollIntoView({ behavior: "smooth" });
          break;
        case "b":
          event.preventDefault();
          document
            .getElementById("builds")
            ?.scrollIntoView({ behavior: "smooth" });
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <section id="hero" className="pb-10 sm:pb-5">
      <div className="flex flex-col sm:flex-row items-start justify-start gap-5 sm:justify-between mb-10">
        <h1 className="text-4xl font-medium">{portfolio.author}</h1>

        <Socials />
      </div>
      <p className="text-muted-foreground text-sm">{portfolio.bio}</p>
    </section>
  );
}
