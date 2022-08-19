import styled from 'styled-components'

export const List = styled.ul `
    display: flex;
    justify-content: center;
    flex-wrap:wrap;
    padding-top: 60px;

    @media ${(props => props.theme.breakpoints.md)} {
        padding-top: 30px;
    }
`

export const ListItem = styled.li `
    width: 300px;
    display: flex;
    flex-direction: row;
    border: 1px solid #fff;
    background-color: rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 20px 0 rgba(0, 0, 255, 0.37);
    backdrop-filter: blur(7px);
    border-radius: 20px;
    border: 3px solid rgba(255, 255, 255, 0.18);
    padding: 20px;
    margin: 10px;
    transition: .4s ease;
    cursor: pointer;

    &:hover {
        box-shadow: 0 8px 20px 0 rgba(255, 0, 0, 0.37);
        animation: floating 2s ease-in-out infinite;
        /*animation floating card*/
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
    }

    @media ${(props => props.theme.breakpoints.lg)} {
      width: 200px;
      padding: 7px;
      padding-bottom: 0;
    }
    @media ${(props => props.theme.breakpoints.sm)} {
      width: 350px;
      height: 110px;
      padding: 10px;
      padding-bottom: 0;
    }
`

export const ListContainer = styled.div `
    display: flex;
    flex-direction: column;
    margin-left: 18px;  
`



