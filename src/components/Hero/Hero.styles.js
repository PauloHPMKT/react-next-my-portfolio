import styled from 'styled-components'

export const ImageHero = styled.img `
    width: 420px;
    border-radius: 100%;
    border: 10px solid #333333;
    transition: .6s all;
    animation: floating 2s ease-in-out infinite;
    /*animation floating img*/
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

    &:hover {
        box-shadow: 0 0 20px;
    }
`