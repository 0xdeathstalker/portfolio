import { Box, Flex, Hide } from '@chakra-ui/react'

import About from '../components/Sections/About'
import Hero from '../components/Sections/Hero'
import Navbar from '../components/Misc/Navbar'
import { DEFAULT_FONT_SIZES, DEFAULT_X_MARGIN, DEFAULT_X_PADDING } from '../lib/constants/ui'
import MinimalBuilds from '../components/Misc/MinimalBuilds'

export default function Home() {
  return (
    <Box 
      minH="100vh" 
      minW="full"
      maxW="896px"
      bg="primary" 
      py={{
        base: "10",
        md: "20",
        lg: "36"
      }}
      display="flex"
      alignItems={{ md: "center" }} 
      justifyContent="center" 
      color="white"
      fontSize={ DEFAULT_FONT_SIZES }
      overflowX="hidden"
    >
      <Flex
        px={ DEFAULT_X_PADDING }
        gap={{ base: "8", md:"16" }}
        direction={{ base: "column", md: "row" }}
      >
        <Navbar />
        <Flex 
          direction="column"
          gap="12"
        >
          <Hero />
          <About />
          <Hide above="md">
            <MinimalBuilds />
          </Hide>
        </Flex>
      </Flex>
    </Box>
  )
}
