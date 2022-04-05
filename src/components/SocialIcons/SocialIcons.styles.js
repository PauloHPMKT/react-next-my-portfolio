import styled from 'styled-components'

export const MediaIcons = styled.ul `
    position: absolute; 
    right: 130px;
    top: 35%; 
`

export const ListIcons = styled.li `
    padding: 11px;
`

export const LinkIcon = styled.a `
    font-size: 26px;
    transition: .6s ease;
    padding: 7px 12px;
    border: 3px solid transparent;

    &:hover {
        border: 3px solid #b10101;
        border-radius: 100%;
    }
`
