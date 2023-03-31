import { FC } from "react"
import { Flex, Link, Text } from "@chakra-ui/react"
import {TwitterLogoIcon, ArrowTopRightIcon, GitHubLogoIcon} from "@radix-ui/react-icons"

import { ExternalLinks } from "../../lib/constants/urls"
import NowPlaying from "../Misc/NowPlaying"



interface IItemProps {
    name: string,
    url: string,
}

const Item: FC<IItemProps> = ({name, url}) => {
    return (
        <Link
            w="full"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            border="1px"
            borderColor="neutral.800"
            borderRadius="8px"
            p="4"
            color="neutral.200"
            _hover={{bg: "neutral.900"}}
            isExternal
            href={url}
        >
            <Flex alignItems="center">
                {name === "Twitter"? <TwitterLogoIcon /> : <GitHubLogoIcon />}
                <Text pl="2" fontSize={{base: "sm"}}>{name}</Text>
            </Flex>
            <ArrowTopRightIcon />
        </Link>
    )
}

const Connects: FC = () => {
    return (
        <Flex w="full" gap="4" pt="8">
            {ExternalLinks.map((link, index) => (
                <Item 
                    key={index}
                    name={link.name}
                    url={link.url}
                />
            ))}
        </Flex>
    )
}

const About = () => {
  return (
        <Flex direction="column" color="neutral.100" gap="4" alignItems="center">
            <Flex direction="column" gap="2">
                <Text fontWeight="500">About</Text>
                <Text color="neutral.300">Building interfaces in both web2 and web3 space. Will graduate in June 2023.</Text>
                <NowPlaying />
            </Flex>
            
            <Connects />
        </Flex>
    )
}

export default About