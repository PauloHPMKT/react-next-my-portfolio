import Button from "../Button/Button"

import { 
  Section, 
  ContentSection, 
  SectionDivider, 
  SectionSubTitle, 
  ImageContainer, 
  SectionInto, 
  SectionText 
} from "../../styles/globalComponentsStyles"
import { ImageAbout } from "./About.styles"

export default function About() {
  return(
    <Section id="about"> 
      <SectionDivider />
      <SectionSubTitle>
        Um pouco sobre mim
      </SectionSubTitle>
      <ContentSection>
        <SectionInto>
          <SectionText>
            Comecei no design buscando desenvolver minhas habilidades, então entrei no mundo freelancer prestando meus serviços de criação e edição gráfica. Fiz isso até 2014 quando precisei dar uma pausa.
            Após alguns anos retomei as atividades e buscando profissionalizar meus serviços, adquirindo novas skills mergulhei no mundo do desenvolvimento web e venho adquirindo habilidades incríveis às quais compartilho com vocês, com o objetivo ajudar aqueles que sonham em andar pela trilha da programação! Fiquem a vontade e vamos incrementar conhecimento juntos!! Dev++.
          </SectionText>
          <Button>
            Contact me
          </Button>
        </SectionInto>
        <ImageContainer>
          <ImageAbout src="/images/about.jpeg" alt="image Paulo" />
        </ImageContainer>
      </ContentSection>
    </Section>
  )
} 