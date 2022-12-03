import styled from "styled-components";

export const Navigate = styled.nav`
	display: flex;
`;

export const MenuBar = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LinkMenu = styled.a`
	padding: 15px 20px;
	font-size: ${props => props.theme.fonts.secondary_size};
	font-weight: ${props => props.theme.fonts.fontWeight.light};
	font-family: ${props => props.theme.fonts.textFamily};
	cursor: pointer;
	transition: 0.4s ease;

	&:hover {
		color: ${props => props.theme.colors.secondary_color};
		background-color: ${props => props.theme.colors.primary1};
		border-radius: ${props => props.theme.fonts.secondary_size};
	}

	@media ${props => props.theme.breakpoints.lg} {
		font-size: 17px;
	}
	@media ${props => props.theme.breakpoints.md} {
		display: none;
	}
`;

export const MenuMobile = styled.div`
	position: fixed;
	top: 20px;
	right: 20px;
	z-index: 2000;
	padding: 10px 15px;
	background-color: ${props => props.theme.colors.primary1};
	border-radius: 10px;
	font-size: 40px;
	display: ${props => props.active ? "none" : "flex"};

	@media ${props => props.theme.breakpoints.md} {
		display: flex;
	}
`;
