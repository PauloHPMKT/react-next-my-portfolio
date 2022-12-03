import styled from "styled-components";

export const ImageHero = styled.div`
	padding: 10px;
	width: 520px;
	height: 550px;
	transition: 0.6s all;
	display: flex;
	justify-content: center;
	align-items: center;
	/*animation floating img*/
	animation: floating linear infinite 2s;
	@keyframes floating {
		0% {
			transform: translatey(0px);
		}
		50% {
			transform: translatey(-8px);
		}
		100% {
			transform: translatey(0px);
		}
	}

	@media ${(props) => props.theme.breakpoints.mxl} {
		width: 350px;
	}
	@media ${(props) => props.theme.breakpoints.lg} {
		width: 300px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 250px;
	}
`;

export const SectionTitle = styled.h1`
	font-weight: 800;
	font-size: ${({ main }) => main ? "75px" : "60px"};
	width: max-content;
	max-width: 100%;
	background-color: #fff;
	//background: linear-gradient(121.57deg, #FFFFFF 40.77%, #b10101 60.15%);
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	margin-bottom: 20px;

	@media ${props => props.theme.breakpoints.mxl} {
		font-size: ${props => props.main ? "59px" : "50px"};
	}

	@media ${props => props.theme.breakpoints.xs} {
		font-size: 45px;
	}
`;
