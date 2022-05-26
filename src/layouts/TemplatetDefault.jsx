import Head from 'next/head'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

import { Container } from './Layout.styles'

export default function TemplateDefault({ children }) {
  return( 
    <Container>
      <Head>
        <title>Paulo Sérgio | Frontend Dev</title>
      </Head>
      <Header />
      <main>{ children }</main>
      <Footer />
    </Container>
  )
}