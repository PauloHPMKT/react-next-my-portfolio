import styled from 'styled-components'

export const ImageAbout = styled.img `
    width: 400px;
    margin: 10px 0;
    border-radius: 40px;
    transition: .4s ease;

    &:hover {
        box-shadow: 0 0 15px;
    } 

    @media ${(props => props.theme.breakpoints.md)} {
        width: 300px;
    }
`