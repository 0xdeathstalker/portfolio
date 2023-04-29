import { Flex, Text } from '@chakra-ui/react'
import { FC } from 'react'
import { Kaisei_Decol } from "next/font/google"

const kaisei = Kaisei_Decol({
    weight: "700",
    subsets: ["latin"]
})

const Gm: FC = () => {
  return (
    <Flex minW="590px" minH="310px" gap="6" direction="column" px={{ base: "2", md: "0" }}>
        <Text className={kaisei.className} fontSize="3xl" color="neutral.300">Say GM</Text>        <Text>Say gm section coming soon!</Text>
    </Flex>
  )
}

export default Gm