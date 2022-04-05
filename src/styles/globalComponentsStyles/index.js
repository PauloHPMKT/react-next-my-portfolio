import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-direction: ${props => props.row ? "row" : "column"};
  padding: 80px 100px;
`

export const ContentSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
`

export const SectionInto = styled.div `
    display: flex;
    flex-direction: column;  
    width: 50%;
`

export const SectionTitle = styled.h1`
  font-weight: 800;
  font-size: 75px;
  width: max-content;
  max-width: 100%;
  background: linear-gradient(121.57deg, #FFFFFF 40.77%, #b10101 60.15%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;  
  margin-bottom: 20px;
`

export const SectionSubTitle = styled.h2`
  font-weight: 600;
  font-size: ${(props) => props.main ? '65px' : '56px'};
  max-width: 100%;
  width: max-content;
  background: linear-gradient(121.57deg, #FFFFFF 40.77%, #b10101 60.15%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;  
  margin-bottom: 20px;
`

export const SectionText = styled.p `
  font-size: ${props => props.theme.fonts.text};
  color: ${props => props.theme.colors.text_color};
  font-weight: 300;
  letter-spacing: 2px;
  margin-bottom: 20px;
`

export const ListTitle = styled.h3 `
    font-size: 28px;
    font-weight: 700;
    letter-spacing: 0.02em;
    margin-bottom: 8px;
`

export const ListParagraph = styled.p `
    font-size: 20px;
    color: #cecece;
    margin-bottom: 30px;
`

export const SectionDivider = styled.div `
  width: 200px;
  height: 5px;
  background: linear-gradient(#121212, #b10101); 
  border-radius: 3px; 
`

export const ImageContainer = styled.div `
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
` 

export const Card = styled.div `
    width: 400px;
    height: 550px;
    background-color: #333;
    margin: 20px;
    padding: 30px;
    border-radius: 20px;
    border: 3px solid #444;
`