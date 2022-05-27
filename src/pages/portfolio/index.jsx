import TemplateDefault from "../../layouts/TemplatetDefault"
import { projects } from '../../../constants/constants'

import { 
  ContentSection, 
  Section, 
  SectionDivider, 
  SectionSubTitle, 
  Card, 
  ListTitle, 
  ListParagraph, 
  SectionText
} from "../../styles/globalComponentsStyles"
import { ContainerProjects, Cover, ExternalLink } from "../../styles/portfolioStyles/portfolio.styles"

export default function Develop() {
  return(
    <TemplateDefault>
      <Section>
        <SectionDivider />
        <SectionSubTitle size>
          Meus projetos web
        </SectionSubTitle>
        <SectionText>
          Confira alguns de meus principai trabalhos
        </SectionText>
        <ContentSection>
          <ContainerProjects>
            {
              projects.map((project, id) => {
                return(
                  <Card>
                    <Cover src={project.image} alt={project.title} />
                    <ListTitle key={id}>{project.title}</ListTitle>
                    <ListParagraph>{project.description}</ListParagraph>
                    <ExternalLink href={project.visit}>
                      Ver Demo
                    </ExternalLink>
                    <ExternalLink href={project.source}>
                      Ver Código
                    </ExternalLink>
                  </Card>
                )
              })
            }
          </ContainerProjects>
        </ContentSection>
      </Section>
    </TemplateDefault>
  )
}