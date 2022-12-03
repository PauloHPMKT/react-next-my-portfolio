import styled from 'styled-components'

export const Section = styled.section`
  padding: 80px 0;

  @media ${(props => props.theme.breakpoints.xl)} {
    padding: 80px 20px;
  }
  @media ${(props => props.theme.breakpoints.sm)} {
    padding: 80px 15px;
  }
`

export const ContentSection = styled.div`
  display: flex;
  flex-direction: ${({ row }) => row ? 'row' : 'column'};
  justify-content: ${({ justifyPosition }) => justifyPosition ? 'space-between' : 'center'};
  align-items: center;

  @media ${(props => props.theme.breakpoints.mlg)} {
    flex-direction: column-reverse;
  }
`

export const SectionInto = styled.div `
  display: flex;
  flex-direction: column;
  width: ${({ center }) => center ? '50%' : '100%'};

  @media ${(props => props.theme.breakpoints.mlg)} {
    width: 100%;
    padding-top: 30px;
  }
`

export const SectionSubTitle = styled.h2`
  font-weight: ${props => props.theme.fonts.fontWeight.bold};
  font-size: ${({ onSize }) => onSize ? '56px' : '40px'};
  max-width: 100%;
  width: max-content;
  background: #fff;//linear-gradient(121.57deg, #FFFFFF 40.77%, #b10101 60.15%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;

  @media ${(props => props.theme.breakpoints.md)} {
    font-size: ${(({ onSize }) => onSize ? '39px' : '30px')};
  }

  @media ${(props => props.theme.breakpoints.sm)} {
    font-size: 30px;
  }
`

export const SectionText = styled.p `
  font-size: ${props => props.theme.fonts.primary_size};
	font-family: ${props => props.theme.fonts.textFamily};
  font-weight: ${props => props.theme.fonts.fontWeight.light};
  color: ${props => props.theme.colors.text_color};
  letter-spacing: 2px;
  margin-bottom: 20px;

  @media ${(props => props.theme.breakpoints.sm)} {
    font-size: ${({ onSize }) => onSize ? '20px' : '17px'};
  }
`

export const ListTitle = styled.h3 `
    font-size: ${props => props.theme.fonts.secondary_size};
    font-weight: ${props => props.theme.fonts.fontWeight.bold};
    letter-spacing: 0.02em;
    margin-bottom: 8px;
`

export const ListParagraph = styled.p `
    font-size: 15px;
    color: #cecece;
    margin-bottom: 30px;
`

export const SectionDivider = styled.div `
  width: 200px;
  height: 5px;
  background: ${props => props.theme.colors.primary1};
  border-radius: 3px;
`

export const ImageContainer = styled.div `
  width: ${({ center }) => center ? '50%' : '100%'};
  display: flex;
  justify-content: center;
  align-items: ${({ startPosition }) => startPosition ? 'flex-start' : 'center'};

  @media ${(props => props.theme.breakpoints.mlg)} {
    width: 100%;
  }
`

export const Card = styled.div `
    width: 350px;
    height: 500px;
    background-color: #333;
    margin: 20px;
    padding: 30px;
    border-radius: 20px;
    border: 3px solid #444;

    @media ${(props => props.theme.breakpoints.lg)} {
      width: 300px;
      margin: 10px;
    }

    @media ${(props => props.theme.breakpoints.sm)} {
      width: 350px;
    }

    @media ${(props => props.theme.breakpoints.xs)} {
      width: 300px;
    }
`
