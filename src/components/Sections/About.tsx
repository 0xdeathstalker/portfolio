import { Flex, Text } from "@chakra-ui/react"

import NowPlaying from "../Misc/NowPlaying"

const About = () => {
  return (
        <Flex direction="column" color="neutral.100" gap="4" alignItems="center">
            <Flex direction="column" gap="2">
                <Text fontWeight="500">About</Text>
                <Text color="neutral.300">Building interfaces in both web2 and web3 space. Will graduate in June 2023.</Text>
                <NowPlaying />
            </Flex>
        </Flex>
    )
}

export default About