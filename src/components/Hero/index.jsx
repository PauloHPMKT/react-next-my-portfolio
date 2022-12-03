import Image from "next/image"
import Button from "../Button"
import SocialIcons from "../SocialIcons"

import {
  Section,
  ContentSection,
  SectionText,
  SectionInto,
  ImageContainer
} from "../../styles/globalComponentsStyles"
import { SectionTitle, ImageHero } from "./Hero.styles"

import PersonalImage from '../../../public/images/pic-avatar.png'

export default function Hero() {

  return(
    <Section>
      <ContentSection row>
        <SectionInto center>
          <SectionTitle main>
            Paulo Sérgio
          </SectionTitle>
          <SectionText size>
            Olá tudo bem? Sou desenvolvedor web focado na área de Front-end utilizando tecnologias da stack de JavaScript como React e Vue JS. Juntos podemos criar soluções inteligentes.
						<br/><br/>
						Conheça mais sobre meus trabalhos!
          </SectionText>
          <Button onClick={(e) => {
            e.preventDefault()
            window.location.href = `/files/CURRICULO.pdf`
          }}>
            Meu Resumo
          </Button>
        </SectionInto>
        <ImageContainer center>
					<ImageHero>
						<Image
							src={PersonalImage}
							layout="fill"
							alt="ola"
						/>
					</ImageHero>
        </ImageContainer>
      </ContentSection>
      <SocialIcons />
    </Section>
  )
}
