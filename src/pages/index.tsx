import { Box, Flex } from '@chakra-ui/react'

import About from '../components/Sections/About'
import Hero from '../components/Sections/Hero'
import Work from '../components/Sections/Work'
import Links from '../components/Sections/Links'
import { DEFAULT_FONT_SIZES, DEFAULT_X_PADDING } from '../lib/constants/ui'
import Footer from '../components/Sections/Footer'

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
      alignItems="center" 
      justifyContent="center" 
      color="white"
      fontSize={DEFAULT_FONT_SIZES}
      overflowX="hidden"
    >
      <Flex 
        direction="column" 
        gap="12"
        px={DEFAULT_X_PADDING}
      >
        <Hero />
        <About />
        <Work />
        <Links />
        <Footer />
      </Flex>
    </Box>
  )
}
