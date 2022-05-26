import TemplateDefault from "../../layouts/TemplatetDefault"
import { Section, SectionDivider, SectionSubTitle, SectionText, ContentSection } from "../../styles/globalComponentsStyles"

export default function Design() {
  return(
    <TemplateDefault>
      <Section>
        <SectionDivider />
        <SectionSubTitle>
          Meus projetos Design
        </SectionSubTitle>
        <SectionText>
          Confira alguns de meus principai trabalhos em Design gráfico.
        </SectionText>
        <ContentSection>
          <p style={{margin: '150px 0',}}>Aguardem, Estou agrupando meus projetos para que vocês possam conferir!</p>
        </ContentSection>
      </Section>
    </TemplateDefault>
  )
}


