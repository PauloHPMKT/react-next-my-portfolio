import Button from "../Button/Button"
import SocialIcons from "../SocialIcons/SocialIcons"

import { 
  ContentSection, 
  SectionText, 
  SectionTitle,  
  SectionInto, 
  ImageContainer 
} from "../../styles/globalComponentsStyles"
import { ImageHero } from "./Hero.styles"

export default function Hero() {
  return(
    <>
      <ContentSection>
        <SectionInto>
          <SectionTitle>
            Paulo Sérgio
          </SectionTitle>
          <SectionText>
            Olá tudo bem? Sou web desenvolvedor especializado em Front-end com uso da tecnologia React JS. Juntos podemos criar soluções inteligentes.
          </SectionText>
          <Button onClick={(e) => {
            e.preventDefault()
            window.location.href = `/files/CURRICULO.pdf`
          }}>
            Meu Resumo
          </Button>
        </SectionInto>
        <ImageContainer>
          <ImageHero src="/images/avatar-pic.png" alt="avatar Paulo" />
        </ImageContainer>
      </ContentSection>
      <SocialIcons />
    </>
  )
}