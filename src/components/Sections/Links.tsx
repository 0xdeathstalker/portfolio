import { FC } from 'react'
import Link  from "next/link"
import { Flex, Text, Link as CLink } from "@chakra-ui/react"
import { ArrowTopRightIcon, TwitterLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons"

import { ExternalLinks } from '../../lib/constants/urls'

interface IItemProps {
    name: string;
    url: string;
    username?: string;
}

const BoxItem: FC<IItemProps> = ({ name, url, username }) => {
    return (
        <CLink
            w="full"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            border="1px"
            borderColor="neutral.800"
            borderRadius="8px"
            p="4"
            color="neutral.400"
            _hover={{ bg: "neutral.900", color: "neutral.300" }}
            isExternal
            href={url}
        >
            <Flex alignItems="center">
                {name === "Twitter"? <TwitterLogoIcon /> : <GitHubLogoIcon />}
                <Text pl="2" fontSize={{ base: "sm" }}>{ name }</Text>
            </Flex>
            <ArrowTopRightIcon />
        </CLink>
    )
}

const LinkItem: FC<IItemProps> = ({ name, url, username }) => {
    return (
        <CLink
            color="neutral.400"
            _hover={{ color: "neutral.200" }}
            isExternal
            href={url}
            fontFamily="secondary"
        >
            <Flex alignItems="center">
                {name === "Twitter" ? <TwitterLogoIcon /> : <GitHubLogoIcon />}
                <Text ml="2">{username}</Text>
            </Flex>
        </CLink>
    )
}

const Links = () => {
  return (
    <Flex 
        w="full"
        alignItems="center" 
        gap="4" 
        fontFamily="secondary" 
        color="neutral.400" 
    >
        <Flex gap="6" w="full">
            <Link 
                href="/builds"
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2px",
                    color: "#a3a3a3"
                }}
            >
                <Text 
                    as="span" 
                    fontWeight="500"
                    _hover={{ color: "neutral.200" }}
                >
                    my builds
                </Text>

                <ArrowTopRightIcon />
            </Link>
            
            {ExternalLinks.map(( link, index ) => (
                <LinkItem 
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