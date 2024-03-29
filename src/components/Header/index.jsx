import Link from "next/link";
import Image from "next/image";

import Navigation from "../Navigation";
import { HeaderContainer, LinkHeader } from "./Header.styles";

import LogoImage from '../../../public/images/logo-devmais-removebg-preview.png'

export default function Header() {
	return (
		<HeaderContainer>
			<Link href="/" passHref>
				<LinkHeader>
					<Image
						src={LogoImage}
						width={185}
						height={55}
						alt="logo dev++"
					/>
				</LinkHeader>
			</Link>
			<Navigation />
		</HeaderContainer>
	);
}
