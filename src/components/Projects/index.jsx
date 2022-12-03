import Link from 'next/link'
import { FaRegLightbulb } from 'react-icons/fa'
import { BiCodeBlock } from 'react-icons/bi'
import { MdMobileFriendly } from 'react-icons/md'

import CardFull from '../CardsOp/CardFull'

import {
  ContentSection,
  Section,
  SectionDivider,
  SectionSubTitle,
  SectionText
} from '../../styles/globalComponentsStyles'
import { ButtonMain } from '../Button/Button.styles'

export default function Projects() {
	return(
    <Section id='portfolio'>
      <SectionDivider />
      <SectionSubTitle onSize>
			Conceitos
      </SectionSubTitle>
      <SectionText>
        Utilizo alguns principais conceitos para criação de meus projetos
      </SectionText>
			<ContentSection row justifyPosition>
				<CardFull
					icon={<FaRegLightbulb />}
					title='Design Criativo'
					description='Costumo dizer que o design é o poder para fazer que sonhos sejam reais e de fato um design tem a capacidade de tornar algo que é visualizado em algo visível. Quando falamos de ser um design criatívo, isso é um diferencial cruscial.'
				/>
				<CardFull
					icon={<BiCodeBlock />}
					title='Desenvolvimento'
					description='A criação de cada projeto é um desafio distinto, pois envolve estratégias e um exercício mental intenso, onde colocamos a prova nossa capacidade de raciocínio! Vamos criar juntos?'
				/>
				<CardFull
					icon={<MdMobileFriendly />}
					title='Design responsivo'
					description='A criação de cada projeto é um desafio distinto, pois envolve estratégias e um exercício mental intenso, onde colocamos a prova nossa capacidade de raciocínio! Vamos criar juntos?'
				/>
			</ContentSection>
			<ButtonMain>
				teste
			</ButtonMain>
			<ButtonMain>
				teste
			</ButtonMain>
      {/*<ContentSection row>
        <Link href="/portfolio">
          <a>
            <CardOp
              icon={<FaCode />}
              title="Desenvolvimento Web"
              description="Veja meus projeto web, o quais utilizo as tecnologia relacionadas na seção acima!"
            />
          </a>
        </Link>
        <Link href="/portfolio/design">
          <a>
            <CardOp
              icon={<FaRegLightbulb />}
              title="Design Criativo"
              description="Aqui compartilho alguns de meus projetos de design mais importantes."
            />
          </a>
        </Link>
			</ContentSection>*/}
    </Section>
  )
}
