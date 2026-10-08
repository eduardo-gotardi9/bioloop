import { Link } from 'react-router-dom';
import Icon from '../../../components/Icon/Icon';
import './HeroSection.css'

function HeroSection() {
  return (
    <section className="carbono-hero">
      <div className="container carbono-hero-inner">
        <div className="carbono-hero-content">
          <span className="section-eyebrow carbono-hero-eyebrow">
            CARBONO COM ORIGEM
          </span>

          <h1 className="carbono-hero-title">
            Remoção durável.
            <br />
            Impacto que permanece.
          </h1>

          <p className="carbono-hero-subtitle">
            Transformamos resíduos agroindustriais em biochar e créditos de
            carbono certificados, conectando cooperativas, produtores e empresas
            comprometidas com um futuro mais sustentável.
          </p>

          <div className="carbono-hero-actions">
            <Link to="/fale-conosco" className="btn carbono-hero-btn">
              Quero conhecer um projeto <Icon name="arrowRight" />
            </Link>
          </div>
        </div>

        <div
          className="carbono-hero-media"
          role="img"
          aria-label="Mão segurando fragmentos de biochar ao lado de uma muda de planta"
        />
      </div>
    </section>
  );
}

export default HeroSection;
