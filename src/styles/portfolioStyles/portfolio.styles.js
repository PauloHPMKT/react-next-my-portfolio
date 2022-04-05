import styled from 'styled-components'

export const ContainerProjects = styled.div `
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 80px 0;
`

export const Cover = styled.img `
    width: 100%;
    height: 40%;
    object-fit: cover;
    overflow: hidden;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.37);
`

export const ExternalLink = styled.a `
    color: #fff;
    background-color: red;
    margin: 20px 5px;
    padding: 10px 20px;
    border-radius: 10px;
    transition: .4s ease;

    &:hover {
        box-shadow: 0 0 10px #b10101;
        background-color: #b10101; 
    }
`