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
        description: "An ecommerce project built with the idea of providing a delightful user experience for an online watches store. Elegant design primarily for web view and dark colour scheme. Any suggestions for improving the UI will also be welcomed.",
        url: "https://time-stone.vercel.app/",
        githubRepo: "https://github.com/Im-Soumya/Time-Stone"
    },
    {
        aboutTime: "2022",
        name: "Messaging Application",
        description: "A simple messaging application built to provide a clean user experience with Next.js, Tailwind and Firebase. 1-on-1 messaging ability is provided.",
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