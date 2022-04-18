import styled from 'styled-components'

export const Section = styled.section `
  display: flex;
  flex-direction: ${props => props.row ? "row" : "column"};
  align-items: flex-start;
  padding: 80px 100px;

  @media ${(props => props.theme.breakpoints.mlg)} {
    flex-direction: column;
  }
  @media ${(props => props.theme.breakpoints.lg)} {
    padding: 80px 40px;
  } 
  @media ${(props => props.theme.breakpoints.sm)} {
    padding: 80px 15px;
  } 
`

export const ContentSection = styled.div `
  display: flex;
  flex-direction: ${props => props.row ? 'row' : 'column-reverse'};
  align-items: flex-start; 
 

  @media ${(props) => props.theme.breakpoints.mlg} {
    flex-direction: column-reverse;
  }
`

export const SectionInto = styled.div `
  display: flex;
  flex-direction: column;  
  width: ${props => props.center ? '50%' : '100%'};

  @media ${(props => props.theme.breakpoints.mlg)} {
    width: 100%;
    padding-top: 30px;
  }
`

export const SectionTitle = styled.h1`
  font-weight: 800;
  font-size: ${props => props.main ? '60px' : '75px'};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(121.57deg, #FFFFFF 40.77%, #b10101 60.15%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;  
  margin-bottom: 20px;

  @media ${(main => main.theme.breakpoints.mxl)} {
    font-size: ${(props => props.main ? '60px' : '50px')};
  }
`

export const SectionSubTitle = styled.h2`
  font-weight: 600;
  font-size: ${(props) => props.main ? '30px' : '56px'};
  max-width: 100%;
  width: max-content;
  background: linear-gradient(121.57deg, #FFFFFF 40.77%, #b10101 60.15%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;  
  margin-bottom: 20px;

  @media ${(props => props.theme.breakpoints.sm)} {
    font-size: 30px;
  }
`

export const SectionText = styled.p `
  font-size: ${props => props.theme.fonts.text};
  color: ${props => props.theme.colors.text_color};
  font-weight: 300;
  letter-spacing: 2px;
  margin-bottom: 20px;

  @media ${(props => props.theme.breakpoints.sm)} {
    font-size: ${props => props.size ? '20px' : '17px'};
  } 
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
  width: ${props => props.center ? '50%' : '100%'};
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${(props => props.theme.breakpoints.mlg)} {
    width: 100%;
  }
` 

export const Card = styled.div `
    width: 400px;
    height: 550px;
    background-color: #333;
    margin: 20px;
    padding: 30px;
    border-radius: 20px;
    border: 3px solid #444;

    @media ${(props => props.theme.breakpoints.md)} {
      width: 300px;
    }
`