import { Box, Flex } from '@chakra-ui/react'
import About from '../components/Sections/About'
import Navbar from '../components/Sections/Navbar'

import { DEFAULT_FONT_SIZES, DEFAULT_X_PADDING } from '../lib/constants/ui'

export default function Home() {
  return (
    <Box
      minH="100vh"
      bg="primary"
      color="white"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems={{ md: "start", lg: "center" }}
      justifyContent={{ md: "start", lg: "center" }}
      py={{ base: "7", md: "40" }}
      px={DEFAULT_X_PADDING}
      fontSize={DEFAULT_FONT_SIZES}
    >
      <Flex direction={{ base: "column", md: "row" }} gap={{ base: "6", md: "20" }}>
        <Navbar />
        <About />
      </Flex>
    </Box>
  )
}
