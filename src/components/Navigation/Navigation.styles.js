import styled from 'styled-components'

export const Navigate = styled.nav `
    display: flex; 
`

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

    @media ${(props => props.theme.breakpoints.lg)} {
        font-size: 17px;
    }
    @media ${(props => props.theme.breakpoints.md)} {
        display: none;
    }
`

export const MenuMobile = styled.div `
    padding: 10px 15px;
    background-color: ${props => props.theme.colors.primary1};
    border-radius: 10px;
    font-size: 40px;
    display: ${({ active }) => active ? 'flex' : 'none'}; 

    @media ${(active => active.theme.breakpoints.md)} {
        display: flex;
    }
`

