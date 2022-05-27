import styled from 'styled-components'

export const ButtonMain = styled.button `
    width: 250px;
    padding: 15px 40px;
    margin: 20px 0;
    border: 3px solid #fff;
    border-radius: 25px;
    font-size: 23px;
    color: ${props => props.theme.colors.secondary_color};
    cursor: pointer;
    transition: .4s ease;
    background-color:transparent;

    &:hover {
        background-color: ${props => props.theme.colors.primary1};
        border: 3px solid ${props => props.theme.colors.primary1};
        box-shadow: 0 0 15px ${props => props.theme.colors.primary1};
    }
`



