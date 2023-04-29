interface IBuild {
    aboutTime: string;
    name: string;
    description: string;
    image?: string,
    url: string;
    githubRepo: string;
}

const Builds: IBuild[] = [
    {
        aboutTime: "2023",
        name: "Buymecoffee defi",
        description: `A decentralized 'buy me a coffee' website.`,
        image: "./images/buy-me-coffee.png",
        url: "https://buy-me-coffee-defi.vercel.app",
        githubRepo: "https://github.com/Im-Soumya/buy-me-coffee"
    },
    {
        aboutTime: "2022",
        name: "Time stone",
        description: "An ecommerce to provide delightful shopping experience.",
        image: "./images/time-stone.png",
        url: "https://time-stone.vercel.app/",
        githubRepo: "https://github.com/Im-Soumya/Time-Stone"
    },
    {
        aboutTime: "2022",
        name: "Instagram clone",
        description: "A simple clone of Instagram using react.js, tailwind and firebase.",
        image: "./images/instagram-clone.png",
        url: "https://react-instagram-clone-alpha.vercel.app/",
        githubRepo: "https://github.com/Im-Soumya/Instagram-clone"
    }
]

export {Builds}