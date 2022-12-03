import { ListTitle, SectionText } from '../../../styles/globalComponentsStyles'
import { CardContainer } from './CardFull'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	sizeCard: {
		width: '33.3%',
		height: '400px',
		padding: '23px',
	},
	sizeText: {
		fontSize: '18px',
	}
})

export default function CardFull({ icon, title, description }) {
	const classes = useStyles()

	return(
		<CardContainer className={classes.sizeCard}>
			<div>
				{ icon }
			</div>
			<div>
				<ListTitle>{ title }</ListTitle>
				<SectionText className={classes.sizeText}>
					{ description }
				</SectionText>
			</div>
		</CardContainer>
	)
}

