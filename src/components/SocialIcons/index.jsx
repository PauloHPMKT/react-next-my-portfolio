import { MediaIcons, ListIcons, LinkIcon } from "./SocialIcons.styles"
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

export default function SocialIcons() {
  return(
    <MediaIcons>
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
    </MediaIcons>    
  )
}