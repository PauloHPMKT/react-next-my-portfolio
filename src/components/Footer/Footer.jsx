import { FooterContainer } from "./Footer.styles"

export default function Footer() {

  const year = new Date()

  return(
    <FooterContainer>
      Developed by Dev++ &copy; {year.getFullYear()}
    </FooterContainer>
  )
}