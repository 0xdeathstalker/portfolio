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

const GITHUB_PROFILE = "https://github.com/Im-Soumya"
const TWITTER_PROFILE = "https://twitter.com/0xdeathstalker"

export { ExternalLinks, GITHUB_PROFILE, TWITTER_PROFILE }