import { Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <Flex
        direction={{ base: "row", md: "column" }}
        alignItems={{ base: "center", md: "start" }}
        gap="4"
        fontSize={{ md: "md" }}
        mt={{ md: "7" }}
        color="neutral.500"
    >
        <Link href="/">
            <Text
                _hover={{
                    textDecor: "underline",
                    color: "neutral.400"
                }}
            >
                Home
            </Text>
        </Link>
        <Link href="/builds">
            <Text
                _hover={{
                    textDecor: "underline",
                    color: "neutral.300"
                }}
            >
                Builds
            </Text>
        </Link>
        <Link href="/guestbook">
            <Text
                _hover={{
                    textDecor: "underline",
                    color: "neutral.300"
                }}
            >
                Guestbook
            </Text>
        </Link>
    </Flex>
  )
}

export default Navbar