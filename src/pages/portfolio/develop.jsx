import Layout from "../../layouts/Layout"
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
    <Layout>
      <Section>
        <SectionDivider />
        <SectionSubTitle>
          Meus projetos web
        </SectionSubTitle>
        <SectionText>
          Confira alguns de meus principai trabalhos
        </SectionText>
        <ContentSection>
          <ContainerProjects>
            {
              projects.map((project, i) => {
                return(
                  <Card>
                    <Cover src={project.image} alt="site airlins" />
                    <ListTitle key={i}>{project.title}</ListTitle>
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
    </Layout>
  )
}