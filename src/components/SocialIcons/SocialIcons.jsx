import { MediaIcons, ListIcons, LinkIcon } from "./SocialIcons.styles"

export default function SocialIcons() {
  return(
    <>
      <MediaIcons>
        <ListIcons>
          <LinkIcon href="http://www.instagram.com/dev.mais">
            <i class="fa-brands fa-instagram"></i>
          </LinkIcon>
        </ListIcons>
        <ListIcons>
          <LinkIcon href="https://www.github.com/PauloHPMKT">
            <i class="fa-brands fa-github"></i>
          </LinkIcon>
        </ListIcons>
        <ListIcons>
          <LinkIcon href="https://www.linkedin.com/in/paulo-sergio-frontend-dev/">
          <i class="fa-brands fa-linkedin"></i>
          </LinkIcon>
        </ListIcons>
      </MediaIcons>
    </>    
  )
}