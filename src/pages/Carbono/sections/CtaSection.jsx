import { Link } from 'react-router-dom';
import Icon from '../../../components/Icon/Icon';
import './CtaSection.css'


function CtaSection() {
  return (
    <section className="carbono-cta">
      <div className="container carbono-cta-inner">
        <div
          className="carbono-cta-media"
          role="img"
          aria-label="Plantação ao pôr do sol"
        />

        <div className="carbono-cta-content">
          <span className="section-eyebrow carbono-cta-eyebrow">
            VAMOS CONVERSAR
          </span>

          <h2 className="carbono-cta-title">
            Transforme sua estratégia climática em impacto real no campo.
          </h2>

          <p className="carbono-cta-subtitle">
            Conecte sua empresa a projetos de remoção de carbono com biochar
            certificado, e faça parte de uma cadeia mais regenerativa,
            transparente e de longo prazo.
          </p>

          <div className="carbono-cta-actions">
            <Link to="/fale-conosco" className="btn carbono-cta-btn">
              Solicitar contato <Icon name="arrowRight" />
            </Link>
            <a href="#processo" className="btn carbono-cta-btn-secondary">
              Ver como funciona
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
