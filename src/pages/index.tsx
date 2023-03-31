import { Box, Flex } from '@chakra-ui/react'

import About from '../components/Sections/About'
import Hero from '../components/Sections/Hero'
import Work from '../components/Sections/Work'
import Links from '../components/Sections/Links'
import { DEFAULT_FONT_SIZES, DEFAULT_X_PADDING } from '../lib/constants/ui'
import Footer from '../components/Sections/Footer'
import Navbar from '../components/Misc/Navbar'

export default function Home() {
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
          <Hero />
          <About />
          {/* <Work />
          <Links />
          <Footer /> */}
        </Flex>
      </Flex>
    </Box>
  )
}
