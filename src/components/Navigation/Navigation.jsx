import Link from "next/link"
import { LinkMenu, MenuBar } from "./Navigation.styles"

export default function Navigation() {
  return(
    <nav>
      <MenuBar>
        <li>
          <Link href="/">
            <LinkMenu>Home</LinkMenu>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <LinkMenu>About me</LinkMenu>
          </Link>
        </li>
        <li>
          <Link href="#skills">
            <LinkMenu>Skills</LinkMenu>
          </Link>
        </li>
        <li>
          <Link href="/">
            <LinkMenu>Portfolio</LinkMenu>
          </Link>
        </li>
      </MenuBar>
    </nav>
  )
}