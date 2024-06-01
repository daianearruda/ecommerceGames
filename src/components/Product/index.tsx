import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" alt="" />
    <Titulo>Nome do jogo</Titulo>
    <Tag size={'small'}>Categoria</Tag>
    <Tag size={'small'}>Windows</Tag>
    <Descricao>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam
      assumenda quod vel fugit! Placeat consectetur debitis doloribus,
      laudantium autem fuga corporis ipsa quia, nemo non voluptate
      exercitationem eius nulla.
    </Descricao>
  </Card>
)

export default Product
