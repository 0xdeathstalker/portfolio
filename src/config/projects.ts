import type { Project } from '@/lib/types';

export const projects: Array<Project> = [
  {
    title: 'nitro-explorer',
    description:
      'a blazing-fast revamped version of cross-chain blockchain explorer rebuilt with a focus on performance and ux.',
    role: 'creator and maintainer',
    period: 'mar 2025 - jul 2025',
    achievements: [
      'improved ux and codebase to achieve up to 99 lighthouse performance score (prev max: 65)',
      'eliminated layout shift and loading jank with full non-blocking data flow',
      'designed keyboard-driven cmdk navigation for rapid search experience',
    ],
    technologies: [
      'next.js',
      'tailwindcss',
      'shadcnui',
      'zod',
      'zustand',
      'typescript',
    ],
    href: 'https://nitro-explorer.vercel.app',
  },
  {
    title: 'cracked-ui-components',
    description:
      'a growing component library built for web3 applications, designed to simplify integration and speed up development across dapps with polished, reusable primitives.',
    role: 'creator and maintainer',
    period: 'jun 2025 - present',
    achievements: [
      'accelerated web3 dapp integration by 50–60% through reusable, framework-agnostic components',
      'built chain/token selectors and qr-based address utilities used across multiple production apps',
      'ensured responsive and accessible design for seamless experience across devices',
    ],
    technologies: ['react', 'typescript', 'tailwind css', 'viem', 'wagmi'],
    href: 'https://github.com/cracked0x/ui',
  },
  {
    title: 'whispr-room',
    description:
      'a real-time disposable chat app where users can instantly create or join temporary chat rooms without login—built for fast, private, and ephemeral conversations.',
    role: 'creator and maintainer',
    period: 'jun 2025 - jul 2025',
    achievements: [
      'integrated convex as a serverless backend for live room and message sync',
      'added system messages for join/leave activity and contextual flow',
      'implemented graceful UX for handling expired or invalid rooms',
    ],
    technologies: [
      'next.js',
      'tailwind css',
      'convex',
      'react query',
      'typescript',
      'zod',
      'uploadthing',
      'posthog',
      'framer-motion',
    ],
    href: 'https://whispr-room.vercel.app',
  },
] as const;
