import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {NextSeo} from "next-seo"
import type { AppProps } from 'next/app'

import { theme } from '../theme'
import '../styles/globals.css'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo 
        title='Soumya'
        description='My portfolio'
      />
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </QueryClientProvider>
    </>
  )
}
