import { Box, Flex } from "@chakra-ui/react"

import { DEFAULT_X_PADDING, DEFAULT_FONT_SIZES } from "../lib/constants/ui"
import Navbar from "../components/Misc/Navbar"
import Builds from "../components/Sections/Builds"

const builds = () => {
  return (
    <Box 
      minH="100vh" 
      minW="full"
      maxW="896px"
      bg="primary" 
      py={{
        base: "10",
        md: "20",
        // lg: "36"
      }}
      display="flex"
      alignItems="center" 
      justifyContent="center" 
      color="white"
      fontSize={DEFAULT_FONT_SIZES}
      overflowX="hidden"
    >
      <Flex
        px={DEFAULT_X_PADDING}
        gap={{base: "8", md:"16"}}
        direction={{base: "column", md: "row"}}
      >
        <Navbar />
        <Flex 
          direction="column"
          gap="12"
        >
          <Builds />
        </Flex>
      </Flex>
    </Box>
  )
}

export default builds