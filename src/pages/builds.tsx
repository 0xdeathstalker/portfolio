import { Box, Flex, Text } from "@chakra-ui/react"
import { DEFAULT_X_PADDING, DEFAULT_FONT_SIZES } from "../lib/constants/ui"
import Navbar from "../components/Misc/Navbar"

const builds = () => {
    return (
        <Box 
          minH="100vh" 
          minW="full"
          bg="primary" 
          py={{
            base: "10",
            md: "20",
            lg: "36"
          }}
          display="flex"
          // flexDirection={{base: "column", md: "row"}}
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
                Builds goes here
            </Flex>
          </Flex>
        </Box>
      )
}

export default builds