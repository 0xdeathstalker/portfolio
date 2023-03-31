interface IBuild {
    aboutTime: string;
    name: string;
    url: string;
}

const Builds: IBuild[] = [
    {
        aboutTime: "2022",
        name: "Time stone",
        url: "https://time-stone.vercel.app/"
    },
    {
        aboutTime: "2022",
        name: "Messaging Application",
        url: "https://next-chat-app-beta.vercel.app/"
    },
    {
        aboutTime: "2022",
        name: "Instagram Clone",
        url: "https://react-instagram-clone-alpha.vercel.app/"
    }
]

export {Builds}