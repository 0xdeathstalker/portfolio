import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Flex
        direction={{base: "row", md: "column"}}
        alignItems={{base: "center", md: "start"}}
        gap="4"
        fontSize={{base: "xs", md: "md"}}
    >
        {/* <Text fontSize="42">S</Text> */}
        <Text>Home</Text>
        <Text>Builds</Text>
        <Text>Guestbook</Text>
    </Flex>
  )
}

export default Navbar