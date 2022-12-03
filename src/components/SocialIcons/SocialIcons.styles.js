import styled from "styled-components";

export const MediaIcons = styled.ul`
	position: absolute;
	right: 130px;
	top: 50%;
	transform: translateY(-50%);

	@media ${(props) => props.theme.breakpoints.xxl} {
		top: 250px;
		right: 70px;
	}

	@media ${(props) => props.theme.breakpoints.md} {
		right: 20px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		right: 0;
	}
`;

export const ListIcons = styled.li`
	padding: 5px;
`;

export const LinkIcon = styled.a`
	font-size: 40px;
	transition: 0.6s ease-in-out;
	padding: 12px;
	border: 3px solid transparent;
	display: flex;

	&:hover {
		border: 3px solid ${props => props.theme.colors.primary1};
		border-radius: 100%;
	}
`;
