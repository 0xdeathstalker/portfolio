import { FC } from "react"
import { Flex, Grid, GridItem, Link, Text } from "@chakra-ui/react"
import { Kaisei_Decol } from "next/font/google"
import { GITHUB_PROFILE, TWITTER_PROFILE } from "../../lib/constants/urls"
import { ArrowTopRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons"

const kaisei = Kaisei_Decol({
    weight: "700",
    subsets: ["latin"]
})

const About: FC = () => {
  return (
    <Flex maxW="590px" minH="310px" direction="column" gap="8" px={{ base: "2", md: "0" }}>
      <Text 
        className={kaisei.className}
        fontSize="3xl"
        color="neutral.300"
      >
        About Me
      </Text>

      <Flex>
        <Text color="neutral.400">
          Hey, I’m Soumya. I am a front-end engineer and passionate programmer based in India. 
        </Text> 
      </Flex>

      <Flex>
        <Text color="neutral.400">
          Building solid and scalable products with delightful user experience boosts me up to learn more new technologies and act like a developer.
        </Text>
      </Flex> 

      <Flex direction={{ base: "column", md: "row" }} gap={{ base: "3", md: "8" }}>
        <Link
          display="flex"
          alignItems="center"
          gap="1"
          color="neutral.500"
          _hover={{ color: "neutral.200", transition: "all 200ms ease-in-out" }}
          href={GITHUB_PROFILE}
          isExternal
        >
          <ArrowTopRightIcon />
          <Text>check out my github</Text>
        </Link>

        <Link
          display="flex"
          alignItems="center"
          gap="1"
          color="neutral.500"
          _hover={{ color: "neutral.200", transition: "all 200ms ease-in-out" }}
          href={TWITTER_PROFILE}
          isExternal
        >
          <ArrowTopRightIcon />
          <Text>follow me on twitter</Text>
        </Link>
      </Flex>   
    </Flex>
  )
}

export default About