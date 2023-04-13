interface IBuild {
    aboutTime: string;
    name: string;
    description: string;
    url: string;
    githubRepo: string;
}

const Builds: IBuild[] = [
    {
        aboutTime: "2023",
        name: "Buy me a Coffee Defi",
        description: `A decentralized "buy me a coffee" website.`,
        url: "https://buy-me-coffee-defi.vercel.app",
        githubRepo: "https://github.com/Im-Soumya/buy-me-coffee"
    },
    {
        aboutTime: "2022",
        name: "Time stone",
        description: "An ecommerce application built with Next.js, Tailwind and GraphQL.",
        url: "https://time-stone.vercel.app/",
        githubRepo: "https://github.com/Im-Soumya/Time-Stone"
    },
    {
        aboutTime: "2022",
        name: "Instagram Clone",
        description: "A clone of Instagram using React, Firebase and ChakraUI.",
        url: "https://react-instagram-clone-alpha.vercel.app/",
        githubRepo: "https://github.com/Im-Soumya/Instagram-clone"
    }
]

export {Builds}