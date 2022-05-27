import styled from 'styled-components'

export const ContainerMenu = styled.div`
    //display: none;
    position: fixed;
    top: 100px;
    left: 0;
    padding: 50px 0;
    background-color: red;
    width: 100%;
    height: 400px;
    z-index: 1000;
    border-radius: 20px;
    border: 1px solid #fff;
    background-color: rgba(255, 0, 0, 0.4);
    box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.37);
    backdrop-filter: blur(4px);
    border-radius: 20px;
    border: 3px solid rgba(255, 255, 255, 0.18);
    animation: slideup 0.5s;

    @keyframes slideup {
        from{
            opacity: 0;
            transform: translateY(90px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`

export const Menu = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 300px;
    width: 100%;
`

export const ListMenu = styled.li`
    width: 100%;
    text-align: center;
    padding: 20px;
    font-size: 23px;
    text-shadow: 0 0 20px black;
    font-weight: bold;
`

