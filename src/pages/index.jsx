import TemplateDefault from '../layouts/TemplatetDefault'
import Hero from '../components/Hero'
import About from '../components/About'
import Tecnologies from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contacts'

export default function Home() {
  return(
    <TemplateDefault>
      <Hero />
      <About />
      <Tecnologies />
      <Projects />
      <Contact />
    </TemplateDefault>
  )
}