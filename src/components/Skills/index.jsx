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
      <SectionSubTitle onSize>
        Minhas Skills
      </SectionSubTitle>
      <SectionText fontSize>
        Tecnologias as quais eu me aperfeiçoo como desenvolvedor para criar e manter meus projetos. Além buscar entregar minhas melhores performances.
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
