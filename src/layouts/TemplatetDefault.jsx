import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'

import { Container } from './Layout.styles'

export default function TemplateDefault({ children }) {
  return(
    <Container fontSize>
      <Head>
        <title>Paulo Sérgio | Frontend Dev</title>
      </Head>
      <Header />
      <main>{ children }</main>
      <Footer />
    </Container>
  )
}
