import { Box, Flex } from "@chakra-ui/react"

import Builds from "../components/Sections/Builds"
import { DEFAULT_X_PADDING, DEFAULT_FONT_SIZES } from "../lib/constants/ui"

const builds = () => {
  return (
    <Box 
      minH="100vh" 
      minW="full"
      bg="primary" 
      py={{
        base: "10",
        md: "20",
      }}
      display="flex"
      alignItems="center"
      justifyContent="center" 
      color="white"
      fontSize={ DEFAULT_FONT_SIZES }
      overflowX="hidden"
    >
      <Flex 
        px={ DEFAULT_X_PADDING }
        direction="column"
      >
        <Builds />
      </Flex>
    </Box>
  )
}

export default builds