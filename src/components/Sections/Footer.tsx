import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Flex 
        textAlign="center"
        w="full"
        mt="6"
        justifyContent="center"
        direction="column"
        fontSize={{
            base: "xs",
            md: "md"
        }}
    >
        <Text color="neutral.400">Thanks for visiting! Have a good day {";)"}</Text>
    </Flex>
  )
}

export default Footer