import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

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
        <SectionSubTitle>
          Meus Contatos
        </SectionSubTitle>
      <ContentSection style={{ paddingTop: '30px', }}>
        <SectionInto>
          <span>E-mail:</span>
          <SectionText>
            <LinkContact href="#">paulodevmais@gmail.com</LinkContact>
          </SectionText>
          <span>Chama no meu WhatsApp:</span>
          <SectionText>
            <LinkContact href="#">Vamos conversar sobre tecnologia?</LinkContact>
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
            <ListIcons >
              <LinkIcon href='http://www.github.com/PauloHPMKT'>
                <FaGithub />
              </LinkIcon>
            </ListIcons>
            <ListIcons>
              <LinkIcon href='http://www.intagram.com/dev.mais'>
                <FaInstagram />
              </LinkIcon>
            </ListIcons>
            <ListIcons>
              <LinkIcon href='https://www.linkedin.com/in/paulo-sergio-frontend-dev/'>
                <FaLinkedin />
              </LinkIcon>
            </ListIcons>
          </ul>
        </SectionInto>
      </ContentSection>
    </Section>
  )
}