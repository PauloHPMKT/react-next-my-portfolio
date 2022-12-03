import NextNProgress from 'nextjs-progressbar'

import Theme from '../styles/themeProvider'

function MyApp({ Component, pageProps }) {
  return(
    <Theme>
      <NextNProgress
        color="#f18c27"
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
