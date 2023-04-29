import Link from 'next/link'
import { Flex, Text } from '@chakra-ui/react'
import { Kaisei_Decol } from "next/font/google"

const kaisei = Kaisei_Decol({
    weight: "700",
    subsets: ["latin"]
})

const Navbar = () => {
  return (
    <Flex
        as="aside"
        minW="80px"
        alignItems="start"
        color="neutral.500"
        direction={{ base: "column" }}
    >
        <Flex direction="column" position={{ lg: "fixed" }} top={{ lg: "40" }}>
            <Link href="/">
                <Text className={kaisei.className} fontSize={{ base: "36px", md: "56px" }} pl="3" color="neutral.200">S</Text>
            </Link>
            
            <Flex
                className={kaisei.className}
                direction={{ base: "row", md: "column" }}
                alignItems="start"
                position="relative"
                fontSize={{ base: "md" }}
                gap={{ md: "3" }}
            >
                <Link href="/">
                    <Text 
                        py="5px" 
                        px="10px"
                        _hover={{ 
                            color: "neutral.200", 
                            transition: "all 200ms ease-in-out" 
                        }}
                    >
                        home
                    </Text>
                </Link>
                <Link href="/about">
                    <Text 
                        py="5px" 
                        px="10px"
                        _hover={{ 
                            color: "neutral.200", 
                            transition: "all 200ms ease-in-out" 
                        }}
                    >
                        about
                    </Text>
                </Link>
                <Link href="/builds">
                    <Text 
                        py="5px" 
                        px="10px"
                        _hover={{ 
                            color: "neutral.200", 
                            transition: "all 200ms ease-in-out" 
                        }}
                        >
                        builds
                    </Text>
                </Link>
                <Link href="/saygm">
                    <Text 
                        py="5px" 
                        px="10px"
                        _hover={{ 
                            color: "neutral.200", 
                            transition: "all 200ms ease-in-out" 
                        }}
                        >
                        say gm
                    </Text>
                </Link>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default Navbar