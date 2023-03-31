interface ILink {
    name: string;
    url: string;
    username?: string;
}

const ExternalLinks: ILink[] = [
    {
        name: "Twitter",
        url: "https://twitter.com/iamsoumyass",
        username: "iamsoumyass",
    },
    {
        name: "Github",
        url: "https://github.com/Im-Soumya",
        username: "Im-Soumya"
    }
]

export {ExternalLinks}