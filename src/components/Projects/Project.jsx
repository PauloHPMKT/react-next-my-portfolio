import Link from 'next/link'
import { FaRegLightbulb, FaCode } from 'react-icons/fa'

import CardOp from '../CardsOp/CardOp'

import { 
  ContentSection, 
  Section, 
  SectionDivider, 
  SectionSubTitle, 
  SectionText 
} from '../../styles/globalComponentsStyles'

export default function Projects() {

  return(
    <Section id='portfolio'>
      <SectionDivider />
      <SectionSubTitle>
        Projetos
      </SectionSubTitle>
      <SectionText>
        Passe o mouse ou clique nos icones para ascender as luzes e conhecer meus principais trabalhos!
      </SectionText>
      <ContentSection>
        <Link href="/portfolio/develop">
          <a>
            <CardOp
              icon={<FaCode />}
              title="Desenvolvimento Web"
              description="Veja meus projeto web, o quais utilizo as tecnologia relacionadas na seção acima!"
            />
          </a>
        </Link>
        <Link href="/portfolio/design">
          <a>
            <CardOp 
              icon={<FaRegLightbulb />}
              title="Design Criativo"
              description="Aqui compartilho alguns de meus projetos de design mais importantes."
            />
          </a>
        </Link>
      </ContentSection>
      
    </Section>
  )
}