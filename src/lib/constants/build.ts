interface IBuild {
    aboutTime: string;
    name: string;
    description: string;
    url: string;
    githubRepo: string;
}

const Builds: IBuild[] = [
    {
        aboutTime: "2022",
        name: "Time stone",
        description: "An ecommerce application built with Next.js, Tailwind and GraphQL.",
        url: "https://time-stone.vercel.app/",
        githubRepo: "https://github.com/Im-Soumya/Time-Stone"
    },
    {
        aboutTime: "2022",
        name: "Messaging Application",
        description: "A simple messaging application built to provide a clean user experience.",
        url: "https://next-chat-app-beta.vercel.app/",
        githubRepo: "https://github.com/Im-Soumya/Messaging-Application"
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