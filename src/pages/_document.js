import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

//stop stylesheet error
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='pt'>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <meta name="title" content="Paulo Sérgio | Frontend Dev" />
          <meta name="description" content="Olá tudo bem? Sou web desenvolvedor especializado em Front-end com uso da tecnologia React JS. Juntos podemos criar soluções inteligentes" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Paulo Sérgio | Frontend Dev" />
          <meta property="og:description" content="Olá tudo bem? Sou web desenvolvedor especializado em Front-end com uso da tecnologia React JS. Juntos podemos criar soluções inteligentes" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}