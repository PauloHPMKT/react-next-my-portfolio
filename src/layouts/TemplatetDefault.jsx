import Head from 'next/head'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

import { Container } from './Layout.styles'

export default function TemplateDefault({ children }) {
  return( 
    <Container>
      <Head>
        <title>Paulo Sérgio | Frontend Dev</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css" integrity="sha512-10/jx2EXwxxWqCLX/hHth/vu2KY3jCF70dCQB8TSgNjbCVAC/8vai53GfMDrO2Emgwccf2pJqxct9ehpzG+MTw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      <Header />
      <main>{ children }</main>
      <Footer />
    </Container>
  )
}