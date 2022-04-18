import Link from "next/link"
import { Navigate, MenuBar, LinkMenu, MenuMobile } from "./Navigation.styles"

export default function Navigation({isOpen}) {
  return(
    <Navigate>
      <MenuBar>
        <li>
          <Link href="/">
            <LinkMenu>Home</LinkMenu>
          </Link>
        </li>
        <li>
          <Link href="/#about">
            <LinkMenu>About me</LinkMenu>
          </Link>
        </li>
        <li>
          <Link href="/#skills">
            <LinkMenu>Skills</LinkMenu>
          </Link>
        </li>
        <li>
          <Link href="/#portfolio">
            <LinkMenu>Portfolio</LinkMenu>
          </Link>
        </li>
      </MenuBar>
      <MenuMobile active={isOpen}>
        <i class="fa-solid fa-bars"></i>
      </MenuMobile>
    </Navigate>
  )
}