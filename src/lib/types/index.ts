import type { ReactElement } from "react";
import type { portfolio } from "@/lib/config/site-data";

export type Project = {
  title: string;
  description: string;
  role: string;
  period: string;
  achievements: Array<string>;
  technologies: Array<string>;
  href: string;
};

export type Work = {
  company: string;
  role: string;
  period: string;
  description: Array<ReactElement | string>;
  href: string;
};

export type SocialKeys = keyof typeof portfolio.socials;
