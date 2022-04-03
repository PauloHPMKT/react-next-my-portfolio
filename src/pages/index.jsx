import Layout from '../layouts/Layout'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Tecnologies from '../components/Skills/Tecnologies'
import Projects from '../components/Projects/Project'
import Contact from '../components/Contacts/Contacts'

import { Section } from '../styles/globalComponentsStyles'

export default function Home() {
  return(
    <Layout>
      <Section>
        <Hero />
      </Section>
      <About />
      <Tecnologies />
      <Projects />
      <Contact />
    </Layout>
  )
}