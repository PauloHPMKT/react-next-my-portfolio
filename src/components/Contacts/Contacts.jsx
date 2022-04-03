import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

import { LinkIcon, ListIcons } from '../SocialIcons/SocialIcons.styles'

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
            <a href="#">paulodevmais@gmail.com</a>
          </SectionText>
          <span>Chama no meu WhatsApp:</span>
          <SectionText>
            <a href="#">Vamos conversar sobre tecnologia?</a>
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
              <LinkIcon>
                <FaLinkedin />
              </LinkIcon>
            </ListIcons>
          </ul>
        </SectionInto>
      </ContentSection>
    </Section>
  )
}