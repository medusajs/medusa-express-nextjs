import { CartProvider, MedusaProvider } from "medusa-react"
import Head from "next/head"
import React from "react"
import { QueryClient } from "react-query"
import { ThemeProvider } from "theme-ui"
import { ProductProvider } from "../context/product-context"
import "../fonts/index.css"
import theme from "../theme"

const BACKEND_URL =
  process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000"

// Your react-query's query client config
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 30000,
      retry: 1,
    },
  },
})

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <MedusaProvider
        baseUrl={BACKEND_URL}
        queryClientProviderProps={{ client: queryClient }}
      >
        <CartProvider>
          <Head>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <ProductProvider>
            <Component {...pageProps} />
          </ProductProvider>
        </CartProvider>
      </MedusaProvider>
    </ThemeProvider>
  )
}

export default App
