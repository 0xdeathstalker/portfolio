import { FC } from "react"
import Link from "next/link";
import { Grid, Flex, Text, GridItem, Link as CLink } from "@chakra-ui/react"
import { ArrowTopRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

import { Builds as allBuilds } from "../../lib/constants/build"
import StyledLink from "../Misc/helpers/StyledLink"
import { GITHUB_REPOSITORIES } from "../../lib/constants/urls";

interface ILinkItem {
    aboutTime: string;
    name: string;
    description?: string;
    url: string;
    githubRepo?: string;
}

const LinkItem: FC<ILinkItem> = ({ name, description, aboutTime, url, githubRepo }) => {
    return (
        <Flex 
            w="full"
            alignItems="center" 
            gap="6"
        >
            <Text color="neutral.500" w="20">{aboutTime}</Text>

            <Flex direction="column">
                <Flex alignItems="center" gap="6" mb="2">
                    <CLink href={url} isExternal>
                        <Text color="neutral.300" display="flex" alignItems="center" gap="1">
                            <Text as="span">{name}</Text>
                            <ArrowTopRightIcon />
                        </Text>
                    </CLink>

                    <CLink href={githubRepo} isExternal>
                        <GitHubLogoIcon />
                    </CLink>
                </Flex>
                
                <Text fontSize={{ base: "xs", md: "sm" }} color="neutral.400">{description}</Text>
            </Flex>
        </Flex>
    )
}

const LinkBuilds: FC = () => {
    return (
        <Flex direction="column" gap="7">
            <Text fontWeight="500">Builds</Text>

            <Flex direction="column" gap="12">
                {allBuilds.map(( build, index ) => (
                    <LinkItem 
                        key={index}
                        name={build.name}
                        aboutTime={build.aboutTime}
                        description={build.description}
                        url={build.url}
                        githubRepo={build.githubRepo}
                    />
                ))}
            </Flex>

            <NavLinks />
        </Flex>
    )
}

const BoxBuilds: FC = () => {
    return (
        <Flex direction="column" gap="3" color="neutral.300">
            <Text 
                ml="3"
                color="neutral.200" 
                fontWeight="500"
            >
                Builds
            </Text>
        
            {/* <Grid
                templateColumns={{ md: "repeat(2, 1fr)" }}
                templateRows="repeat(2, 1fr)"
                gap="4"
            >
                {allBuilds.map(( item, index ) => (
                    <GridItem key={ index }>
                        <StyledLink 
                            name={ item.name }
                            description={ item.description }
                            url={ item.url }
                            githubRepo={ item.githubRepo }
                            aboutTime={ item.aboutTime }
                        />
                    </GridItem>
                ))}
            </Grid> */}

            <Flex direction="column" gap="4">
                {allBuilds.map(( item, index ) => (
                    <StyledLink
                        key={index} 
                        name={item.name}
                        description={item.description}
                        url={item.url}
                        githubRepo={item.githubRepo}
                        aboutTime={item.aboutTime}
                    />
                ))}
            </Flex>
        </Flex>
    )
}

const NavLinks: FC = () => {
    return (
        <Flex mt="4" color="neutral.500" fontFamily="secondary" justifyContent="center" gap="6">
            <Link 
                href="/"
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2px",
                }}
            >
                <Text display="flex" alignItems="center" gap="1" _hover={{ color: "neutral.200" }}>
                    <Text as="span" fontWeight="500">about me</Text>
                    <ArrowTopRightIcon />
                </Text>
            </Link>

            <CLink 
                _hover={{ color: "neutral.200"}}
                href={GITHUB_REPOSITORIES} 
                isExternal
            >
                <Text display="flex" alignItems="center" gap="1" _hover={{ color: "neutral.200" }}>
                    <Text as="span">view more</Text>
                    <ArrowTopRightIcon />
                </Text>
            </CLink>
        </Flex>
    )
}

const Builds = () => {
  return (
    <LinkBuilds />
  )
}

export default Builds