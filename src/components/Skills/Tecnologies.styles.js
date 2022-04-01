import styled from 'styled-components'

export const List = styled.ul `
    display: flex;
    flex-wrap:wrap;
    padding-top: 60px;
    //justify-content: space-between;
`

export const ListItem = styled.li `
    width: 320px;
    display: flex;
    flex-direction: row;
    border: 1px solid #fff;
    background-color: rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 20px 0 rgba(255, 0, 0, 0.37);
    backdrop-filter: blur(7px);
    border-radius: 20px;
    border: 3px solid rgba(255, 255, 255, 0.18);
    padding: 20px;
    margin: 20px;
    cursor: pointer;

    &:hover {
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
`

export const ListContainer = styled.div `
    display: flex;
    flex-direction: column;
    margin-left: 18px;  
`

export const ListParagraph = styled.p `
    font-size: 20px;
    color: #cecece;
`

export const ListTitle = styled.h3 `
    font-size: 28px;
    font-weight: 700;
    letter-spacing: 0.02em;
    margin-bottom: 8px;
`