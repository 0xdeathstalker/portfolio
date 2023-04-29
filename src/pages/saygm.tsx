import { Box, Flex, Text } from "@chakra-ui/react"
import Gm from "../components/Sections/Gm"

import Navbar from "../components/Sections/Navbar"
import { DEFAULT_FONT_SIZES, DEFAULT_X_PADDING } from "../lib/constants/ui"

const saygm = () => {
  return (
    <Box
      minH="100vh"
      bg="primary"
      color="white"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems={{ md: "start", lg:"center" }}
      justifyContent={{ md: "start", lg: "center" }}
      py={{ base: "7", md: "40" }}
      px={DEFAULT_X_PADDING}
      fontSize={DEFAULT_FONT_SIZES}
      overflowX="hidden"
    >
      <Flex direction={{ base: "column", md: "row" }} gap={{ base: "7", md: "20" }}>
        <Navbar />
        <Gm />
      </Flex>
    </Box>
  )
}

export default saygm