// pages/_app.js
import "../styles/globals.css"
import Head from "../components/Heads"
import { ChakraProvider } from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {
  return (

    <ChakraProvider>
      <Head/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
