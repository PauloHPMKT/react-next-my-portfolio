import Button from "../Button"

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
      <SectionSubTitle onSize>
        Um pouco sobre mim
      </SectionSubTitle>
      <ContentSection row>
        <SectionInto center>
          <SectionText onSize>
            Comecei no design em meados de 2007, então entrei no mundo freelancer prestando meus serviços de criação e edição gráfica. Após alguns anos decidi profissionalizar meus serviços.
            <br/><br/>
            Adquirindo novas skills mergulhei no mundo do desenvolvimento web e venho adquirindo habilidades incríveis às quais compartilho com vocês, com o objetivo ajudar aqueles que sonham em andar pela trilha da programação! Fiquem a vontade e vamos incrementar conhecimento juntos!! Dev++.
          </SectionText>
          <Button onClick={() => {
            window.location = `/portfolio`
          }}>
            Meus projetos
          </Button>
        </SectionInto>
				<ImageContainer center startPosition>
					<ImageAbout src="/images/about.jpeg" alt="image Paulo" />
				</ImageContainer>
      </ContentSection>
    </Section>
  )
}
