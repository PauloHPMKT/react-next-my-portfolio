import styled from 'styled-components'

export const Container = styled.div `
    max-width: 1280px;
    margin: 0 auto;

    @media ${(props => props.theme.breakpoints.xxl)} {
        max-width: 85%;
    }
    @media ${(props => props.theme.breakpoints.lg)} {
        max-width: 90%;
    }
    @media ${(props => props.theme.breakpoints.sm)} {
        max-width: 95%;
    }

`