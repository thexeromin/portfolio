// Supports weights 100-700
import '@fontsource-variable/roboto-mono'

import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import theme from '../utils/theme'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
