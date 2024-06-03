import { Container, FooterSection, Links, Link, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link>RPG</Link>
          </li>
          <li>
            <Link>Ação</Link>
          </li>
          <li>
            <Link>Aventura</Link>
          </li>
          <li>
            <Link>Esportes</Link>
          </li>
          <li>
            <Link>Simulação</Link>
          </li>
          <li>
            <Link>Estratégia</Link>
          </li>
          <li>
            <Link>FPS</Link>
          </li>
          <li>
            <Link>Novidades</Link>
          </li>
          <li>
            <Link>Promoções em breve</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <h4>Acesso rápido</h4>
      </FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados </p>
    </div>
  </Container>
)

export default Footer
