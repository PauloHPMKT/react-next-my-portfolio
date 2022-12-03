import { useState } from "react"
import Link from "next/link"

import { AiOutlineBars, AiFillCloseCircle } from 'react-icons/ai'

import MenuToggle from "../MenuMobile"
import { Routers } from "../../../constants/router"

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
        {
					Routers.map(router => (
						<li key={router.idRouter}>
							<Link href={router.path} passHref>
								<LinkMenu>{router.name}</LinkMenu>
							</Link>
						</li>
					))
				}
      </MenuBar>
      <MenuMobile active>
        {
          menuClose
            ? <AiFillCloseCircle onClick={() => handleMenuClose()} />
            : <AiOutlineBars onClick={() => handleMenuOpen()} />
        }
      </MenuMobile>
      {
        toggleMenu && <MenuToggle />
      }
    </Navigate>
  )
}
