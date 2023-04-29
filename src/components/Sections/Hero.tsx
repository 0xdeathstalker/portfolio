import { FC } from "react"
import { Avatar, Flex, Text, Box, Link } from '@chakra-ui/react'
import { Kaisei_Decol } from "next/font/google"
import { ArrowTopRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons"

import NowPlaying from '../Misc/NowPlaying'
import { GITHUB_PROFILE } from "../../lib/constants/urls"

const kaisei = Kaisei_Decol({
    weight: "700",
    subsets: ["latin"]
})

const Hero: FC = () => {
  return (
    <Flex maxW="590px" direction={{ base: "column" }} gap="8" mt={{ md: "3" }} px={{ base: "2", md: "0" }}>
        <Flex direction="column" gap="3">
            <Text
                fontSize="lg"
                color="neutral.400"
            >
                Soumya Mukherjee
            </Text>
            <Text className={kaisei.className} color="neutral.100" fontSize={{ base: "3xl", md: "30px" }} fontWeight="500">Front-end Engineer</Text>
        </Flex>
        
        <Flex
            direction={{ base: "column", md: "row" }}
            alignItems={{ md: "center" }}
            gap="6"
        >
            <Avatar
                src='./images/avatar.jpg'
                size="xl"
                filter="grayscale(70%)"
                name="Soumya"
            />
            <Text color="neutral.400">
                Exploring and learning web3 and blockchain technology and building interfaces in both web2 and web3 spaces. 
            </Text>
        </Flex>

        <Flex
            direction={{ base: "column", lg: "row" }}
            gap="3"
        >
            <NowPlaying />
            <Link 
                // as="button"
                p="5"
                gap={{ base: "2", md: "10" }}
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                color="neutral.400"
                // backgroundColor="neutral.900"
                borderRadius="8px"
                borderWidth="1px"
                borderColor="neutral.800"
                href={GITHUB_PROFILE}
                isExternal
                _hover={{ color: "neutral.200", backgroundColor: "neutral.900", borderColor: "neutral.900", transition: "all 200ms ease-in-out" }}
            >
                <Flex alignItems="center" gap="3">
                    <GitHubLogoIcon style={{ width: "22px", height: "22px" }}/>
                    <Text as="span" >Github</Text>
                </Flex>
                <ArrowTopRightIcon />
            </Link>
        </Flex>
    </Flex>
  )
}

export default Hero