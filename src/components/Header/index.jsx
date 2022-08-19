import Link from 'next/link'
import Image from 'next/image'

import Navigation from '../Navigation'

import { HeaderContainer, LinkHeader } from './Header.styles'

export default function Header() {
  return(
    <HeaderContainer>
      <Link href="/" passHref>
        <LinkHeader>
          <Image 
            src="/images/devmais.png"
            width={175}
            height={90}
            alt="Dev++ logo"
          />
        </LinkHeader>
      </Link>
      <Navigation />  
    </HeaderContainer>
  )
}