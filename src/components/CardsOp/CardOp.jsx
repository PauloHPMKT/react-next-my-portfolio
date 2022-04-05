import { ListTitle, ListParagraph, Card } from '../../styles/globalComponentsStyles'
 
import { IconCard, ImageCard } from "./CardsOp.styles"


export default function CardOp({ title, description, icon }) {
  return(
    <Card>
      <ImageCard>
        <IconCard className={{ fontSize: 50 }}>
          {icon}
        </IconCard>
      </ImageCard>
      <ListTitle>
        {title}
      </ListTitle> 
      <ListParagraph>
        {description}
      </ListParagraph>
    </Card>
  )
}