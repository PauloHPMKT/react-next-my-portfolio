import styled from "styled-components";

export const ImageAbout = styled.img`
	width: 70%;
	border-radius: 40px;
	transition: 0.4s ease;

	&:hover {
		box-shadow: 0 0 15px;
	}

	@media ${(props) => props.theme.breakpoints.md} {
		width: 300px;
	}
`;
