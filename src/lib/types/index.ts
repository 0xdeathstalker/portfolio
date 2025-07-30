import type { portfolio } from "@/lib/config/site";

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
  description: string;
  href: string;
};

export type SocialKeys = keyof typeof portfolio.socials;
