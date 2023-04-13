interface ILink {
    name: string;
    url: string;
    username?: string;
}

const ExternalLinks: ILink[] = [
    {
        name: "Twitter",
        url: "https://twitter.com/0xdeathstalker",
        username: "0xdeathstalker",
    },
    {
        name: "Github",
        url: "https://github.com/Im-Soumya",
        username: "Im-Soumya"
    }
]

const GITHUB_REPOSITORIES = "https://github.com/Im-Soumya?tab=repositories"

export { ExternalLinks, GITHUB_REPOSITORIES }