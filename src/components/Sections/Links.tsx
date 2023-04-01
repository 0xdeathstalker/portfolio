import { FC } from 'react'
import { Flex, Text, Link } from "@chakra-ui/react"
import { ArrowTopRightIcon, TwitterLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons"

import { ExternalLinks } from '../../lib/constants/urls'

interface IItemProps {
    name: string;
    url: string;
    username?: string;
}

const Item: FC<IItemProps> = ({ name, url, username }) => {
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
            _hover={{ bg: "neutral.900" }}
            isExternal
            href={url}
        >
            <Flex alignItems="center">
                {name === "Twitter"? <TwitterLogoIcon /> : <GitHubLogoIcon />}
                <Text pl="2" fontSize={{ base: "sm" }}>{ name }</Text>
            </Flex>
            <ArrowTopRightIcon />
        </Link>
    )
}

const Links = () => {
  return (
    <Flex color="neutral.100" gap="4" alignItems="center" w="full">
        <Flex gap="6" w="full">
            {ExternalLinks.map(( link, index ) => (
                <Item 
                    key={ index }
                    name={ link.name }
                    url={ link.url }
                    username={ link.username! }
                />
            ))}
        </Flex>
    </Flex>
  )
}

export default Links