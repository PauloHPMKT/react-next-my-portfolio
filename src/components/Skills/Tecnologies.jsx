import { Skills } from "./Skills"

import { 
  List, 
  ListContainer, 
  ListItem, 
} from "./Tecnologies.styles"
import { 
  Section, 
  SectionDivider,
  SectionSubTitle, 
  SectionText, 
  ListTitle,
  ListParagraph, 
} from "../../styles/globalComponentsStyles"

export default function Tecnologies() {
  return(
    <Section id="skills">
      <SectionDivider />
      <SectionSubTitle>
        Minhas Skills
      </SectionSubTitle>
      <SectionText>
        Tecnologias as quais eu me aperfeiçoo como desenvolvedor para criar e manter meus projetos
      </SectionText>
      <List>
        {Skills.map(Skill => (
          <ListItem key={Skill.slug}>
            <picture>
              <Skill.Component size="40px" />
            </picture>
            <ListContainer>
              <ListTitle>{Skill.title}</ListTitle>
              <ListParagraph>
                <Skill.Description />
              </ListParagraph>
            </ListContainer>
          </ListItem>
        ))}
      </List>
    </Section>
  )
}