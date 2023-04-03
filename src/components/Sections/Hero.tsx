import { Avatar, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Hero = () => {
  return (
    <Flex 
        color="neutral.100" 
        gap="8" 
        alignItems="center"
    >
        <Avatar 
            src="/images/image.jpg"
            size={{base: "lg", md: "xl"}}
            filter="grayscale(10%)"
            name='Soumya'
        />
        <Flex direction="column">
            <Text fontSize={{base: "md", sm: "lg", md: "xl"}} fontWeight="500">
                Hi, I&apos;m Soumya
            </Text>
            <Text color="neutral.300">
                Frontend engineer based in India.
            </Text>
        </Flex>
    </Flex>
  )
}

export default Hero