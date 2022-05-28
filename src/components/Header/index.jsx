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
            width={170}
            height={75}
            alt="Dev++ logo"
          />
        </LinkHeader>
      </Link>
      <Navigation />  
    </HeaderContainer>
  )
}