import { useState } from "react"
import Link from "next/link"

import { AiOutlineBars, AiFillCloseCircle } from 'react-icons/ai'

import MenuToggle from "../MenuMobile"

import { 
  Navigate, 
  MenuBar, 
  LinkMenu, 
  MenuMobile 
} from "./Navigation.styles"


export default function Navigation() {

const [toggleMenu, setToggleMenu] = useState(false)
const [menuClose, setMenuClose] = useState(false)

const handleMenuOpen = () => {
  setToggleMenu(true)
  setMenuClose(true)
}

const handleMenuClose = () => {
  setToggleMenu(false)
  setMenuClose(false)
}

  return(
    <Navigate>
      <MenuBar>
        <li>
          <Link href="/" passHref>
            <LinkMenu>Home</LinkMenu>
          </Link>
        </li>
        <li>
          <Link href="/#about" passHref>
            <LinkMenu>About me</LinkMenu>
          </Link>
        </li>
        <li>
          <Link href="/#skills" passHref>
            <LinkMenu>Skills</LinkMenu>
          </Link>
        </li>
        <li>
          <Link href="/#portfolio" passHref>
            <LinkMenu>Portfolio</LinkMenu>
          </Link>
        </li>
      </MenuBar>
      <MenuMobile active>
        {
          menuClose 
            ? <AiFillCloseCircle onClick={() => handleMenuClose()} />
            : <AiOutlineBars onClick={() => handleMenuOpen()} /> 
        }
      </MenuMobile>
      {
        toggleMenu && (
          <MenuToggle />  
        )
      }
    </Navigate>
  )
}