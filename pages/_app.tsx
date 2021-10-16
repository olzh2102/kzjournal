import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Global, css } from '@emotion/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <> 
      <Global 
        styles={css`
          body {
            padding: 0 !important;
            margin: 0 !important;
          }
        `} 
      />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
