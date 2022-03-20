import styled from 'styled-components'

export const MenuBar = styled.ul `
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LinkMenu = styled.a `
    padding: 15px 20px;
    font-size: ${props => props.theme.fonts.secondary_size};
    font-weight: 600;
    cursor: pointer; 
    transition: .4s ease;

    &:hover {
        color: red;
        background-color: #fff;
        border-radius: 20px;
    }
`