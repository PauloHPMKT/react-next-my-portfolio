import Link from 'next/link'

import { ContainerMenu, ListMenu, Menu } from "./ToggleMenu.styles"

export default function MenuToggle() {
  return(
    <ContainerMenu>
        <Menu>
          <ListMenu>
            <Link href="/" passHref>
              <a>
                Home
              </a>
            </Link>
          </ListMenu>
          <ListMenu>
            <Link href="/#about" passHref>
              <a>
                Sobre mim
              </a>
            </Link>
          </ListMenu>
          <ListMenu>
            <Link href="/#skills" passHref>
              <a>
                Skills
              </a>
            </Link>
          </ListMenu>
          <ListMenu>
            <Link href="/#portfolio" passHref>
              <a>
                Portfolio
              </a>
            </Link>
          </ListMenu>
        </Menu>
    </ContainerMenu>
  )
}