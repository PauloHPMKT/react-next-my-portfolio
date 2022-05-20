import TemplateDefault from '../layouts/TemplatetDefault'
import Hero from '../components/Hero'
import About from '../components/About/About'
import Tecnologies from '../components/Skills/Tecnologies'
import Projects from '../components/Projects/Project'
import Contact from '../components/Contacts/Contacts'

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