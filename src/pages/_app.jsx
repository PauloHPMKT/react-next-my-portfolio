import NextNProgress from 'nextjs-progressbar'

import Theme from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return(
    <Theme>
      <NextNProgress
        color="#b10101"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </Theme> 
  ) 
}

export default MyApp