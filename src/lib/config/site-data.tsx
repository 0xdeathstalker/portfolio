import Link from "next/link";
import type { Project, Work } from "@/lib/types";

export const portfolio = {
  author: "soumya mukherjee",
  bio: "i build fast and sharp interfaces. obsessed with clean ui and smooth ux. developing the skill to craft polished web experiences. diving deep in web3. if it's sleek, snappy, and slightly overengineered - chances are i made it.",
  resume: "https://drive.google.com/file/d/19NML86_Fj4YxKxNGYzT2qynNRJfFKJvv/view?usp=sharing",
  socials: {
    github: "https://github.com/0xdeathstalker",
    linkedin: "https://www.linkedin.com/in/soumya-mukherjee-88a551248/",
    twitter: "https://x.com/0xmukherjee",
  },
  mail: "soumyamukherjee.work@gmail.com",
} as const;

export const works: Array<Work> = [
  {
    company: "router-protocol",
    role: "frontend developer",
    period: "sep 2023 - present",
    description: [
      "built and scaled cross-chain products like",
      <Link
        href="https://explorer.routernitro.com"
        target="_blank"
        className="text-foreground"
      >
        nitro explorer
      </Link>,
      ",",
      <Link
        href="https://github.com/router-protocol/tangled"
        target="_blank"
        className="text-foreground"
      >
        wallet sdks
      </Link>,
      "and",
      <Link
        href="https://routernitro.com/swap"
        target="_blank"
        className="text-foreground"
      >
        nitro dapp
      </Link>,
      ". integrated evm, solana, bitcoin, tron, and near wallets, optimized transaction flows, and collaborated on api design.",
    ],
    href: "https://www.routerprotocol.com",
  },
  {
    company: "router-protocol",
    role: "frontend developer intern",
    period: "may 2023 - sep 2023",
    description: [
      "built a gamified nft app using router’s cross-chain infra—users minted and leveled up nfts by bridging across networks. integrated smart contracts for a cross-chain lottery system with reward payouts on polygon.",
    ],
    href: "https://www.routerprotocol.com",
  },
] as const;

export const projects: Array<Project> = [
  {
    title: "nitro-explorer",
    description:
      "a blazing-fast revamped version of cross-chain blockchain explorer rebuilt with a focus on performance and ux.",
    role: "creator and maintainer",
    period: "mar 2025 - jul 2025",
    achievements: [
      "improved ux and codebase to achieve up to 99 lighthouse performance score (prev max: 65)",
      "eliminated layout shift and loading jank with full non-blocking data flow",
      "designed keyboard-driven cmdk navigation for rapid search experience",
    ],
    technologies: ["next.js", "tailwindcss", "shadcnui", "zod", "zustand", "typescript"],
    href: "https://nitro-explorer.vercel.app",
  },
  {
    title: "cracked-ui-components",
    description:
      "a growing component library built for web3 applications, designed to simplify integration and speed up development across dapps with polished, reusable primitives.",
    role: "creator and maintainer",
    period: "jun 2025 - present",
    achievements: [
      "accelerated web3 dapp integration by 50–60% through reusable, framework-agnostic components",
      "built chain/token selectors and qr-based address utilities used across multiple production apps",
      "ensured responsive and accessible design for seamless experience across devices",
    ],
    technologies: ["react", "typescript", "tailwind css", "viem", "wagmi"],
    href: "https://github.com/cracked0x/ui",
  },
  {
    title: "whispr-room",
    description:
      "a real-time disposable chat app where users can instantly create or join temporary chat rooms without login—built for fast, private, and ephemeral conversations.",
    role: "creator and maintainer",
    period: "jun 2025 - jul 2025",
    achievements: [
      "integrated convex as a serverless backend for live room and message sync",
      "added system messages for join/leave activity and contextual flow",
      "implemented graceful UX for handling expired or invalid rooms",
    ],
    technologies: ["next.js", "tailwind css", "convex", "react query", "zod", "uploadthing", "posthog"],
    href: "https://whispr-room.vercel.app",
  },
] as const;
