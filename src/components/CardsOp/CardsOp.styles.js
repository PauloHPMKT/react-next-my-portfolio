import styled from 'styled-components'

export const Card = styled.div `
    width: 400px;
    height: 500px;
    background-color: #333;
    margin: 20px;
    padding: 30px;
    border-radius: 20px;
    border: 3px solid #444;
`

export const ImageCard = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
    background-color: #b10101;
    border-radius: 10px;
    margin-bottom: 30px;
    border: 1px solid #fff;
    background-color: rgba(255, 0, 0, 0.18);
    box-shadow: 0 8px 20px 0 rgba(150, 0, 0, 0.37);
    backdrop-filter: blur(7px);
    border-radius: 20px;
    border: 3px solid rgba(255, 255, 255, 0.18);
    cursor: pointer;
    transition: .4s ease;

    &:hover {
        background-color: #b10101;
        box-shadow: 0 8px 20px 0 rgba(255, 0, 0, 0.6);
    }
`

export const IconCard = styled.i `
    font-size: 120px;
`