import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

import { LinkIcon, ListIcons } from '../SocialIcons/SocialIcons.styles'

import { LinkContact } from './Contact.styles'
import {
  ContentSection,
  Section,
  SectionDivider,
  SectionInto,
  SectionSubTitle,
  SectionText
} from "../../styles/globalComponentsStyles"

export default function Contact() {
  return(
    <Section id="contact">
      <SectionDivider />
        <SectionSubTitle onSize>
          Meus Contatos
        </SectionSubTitle>
      <ContentSection style={{ paddingTop: '30px', }}>
        <SectionInto>
          <span>E-mail:</span>
          <SectionText>
            <LinkContact href="mailto:paulodevmais@gmail.com">paulodevmais@gmail.com</LinkContact>
          </SectionText>
          <span>Chama no meu WhatsApp:</span>
          <SectionText>
            <LinkContact href="https://wa.me/5585988704658">Vamos conversar sobre tecnologia?</LinkContact>
          </SectionText>
        </SectionInto>
        <SectionInto >
          <ul
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ListIcons>
              <LinkIcon href="http://www.instagram.com/dev.mais">
                <AiFillInstagram />
              </LinkIcon>
            </ListIcons>
            <ListIcons>
              <LinkIcon href="https://www.github.com/PauloHPMKT">
                <AiFillGithub />
              </LinkIcon>
            </ListIcons>
            <ListIcons>
              <LinkIcon href="https://www.linkedin.com/in/paulo-sergio-frontend-dev/">
              <AiFillLinkedin />
              </LinkIcon>
            </ListIcons>
          </ul>
        </SectionInto>
      </ContentSection>
    </Section>
  )
}
