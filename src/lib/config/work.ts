import type { Work } from "../types";

export const works: Array<Work> = [
  {
    company: "router-protocol",
    role: "frontend developer",
    period: "sep 2023 - present",
    description:
      "built and scaled cross-chain products like nitro explorer and wallet sdks. integrated evm, solana, bitcoin, tron, and near wallets, optimized transaction flows, and collaborated on api design.",
    href: "https://www.routerprotocol.com",
  },
  {
    company: "router-protocol",
    role: "frontend developer intern",
    period: "may 2023 - sep 2023",
    description:
      "built a gamified nft app using router’s cross-chain infra—users minted and leveled up nfts by bridging across networks. integrated smart contracts for a cross-chain lottery system with reward payouts on polygon.",
    href: "https://www.routerprotocol.com",
  },
] as const;
