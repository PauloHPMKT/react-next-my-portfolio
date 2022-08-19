import styled from 'styled-components'

export const MediaIcons = styled.ul `
    position: absolute; 
    right: 130px;
    top: 35%; 

    @media ${(props => props.theme.breakpoints.xxl)} {
        top: 250px;
        right: 70px; 
    }

    @media ${(props => props.theme.breakpoints.md)} {
        right: 20px;
    }
    @media ${(props => props.theme.breakpoints.sm)} {
        right: 0;
    }
`

export const ListIcons = styled.li `
    padding: 5px;
`

export const LinkIcon = styled.a `
    font-size: 26px;
    transition: .6s ease;
    padding: 12px;
    border: 3px solid transparent;
    display: flex;

    &:hover {
        border: 3px solid #b10101;
        border-radius: 100%;
    }
`
