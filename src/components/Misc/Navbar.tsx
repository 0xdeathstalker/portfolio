import { Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <Flex
        direction={{base: "row", md: "column"}}
        alignItems={{base: "center", md: "start"}}
        // justifyContent={{md: "center"}}
        gap="4"
        fontSize={{ md: "md" }}
        mt={{md: "7"}}
    >
        {/* <Text fontSize="42">S</Text> */}
        <Link href="/">
            <Text
                _hover={{textDecor: "underline"}}
            >
                Home
            </Text>
        </Link>
        <Link href="/builds">
            <Text
                _hover={{textDecor: "underline"}}
            >
                Builds
            </Text>
        </Link>
        <Link href="/guestbook">
            <Text
                _hover={{textDecor: "underline"}}
            >
                Guestbook
            </Text>
        </Link>
    </Flex>
  )
}

export default Navbar