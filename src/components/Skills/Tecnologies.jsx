import { Skills } from "./Skills";

import { List, ListItem } from "./Tecnologies.styles";
import { Section, SectionDivider, SectionSubTitle } from "../../styles/globalComponentsStyles";

export default function Tecnologies() {
  return(
    <Section id="skills">
      <SectionDivider />
      <SectionSubTitle>
        Minhas Skills
      </SectionSubTitle>
      renderizando litas
      <List>
        {Skills.map(Skill => (
          <ListItem key={Skill.slug}>
            <picture>
              <Skill.Component size="30px" />
            </picture>
            <h3>{Skill.title}</h3>
            <Skill.Description />
          </ListItem>
        ))}
      </List>
    </Section>
  )
}