import Section from '../Section'

import { Items, Item } from './styles'

import imgGaleria from '../../assets/images/imageGaleria.png'

const Gallery = () => (
  <Section title="Galeria" background="black">
    <Items>
      <Item>
        <img src={imgGaleria} alt="Imagem do link" />
      </Item>
      <Item>
        <img src={imgGaleria} alt="Imagem do link" />
      </Item>
      <Item>
        <img src={imgGaleria} alt="Imagem do link" />
      </Item>
    </Items>
  </Section>
)

export default Gallery
