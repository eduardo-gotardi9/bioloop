import Icon from '../../../components/Icon/Icon';
import './CompanySection.css'
const MOTIVOS = [
  {
    icon: 'cloud',
    titulo: 'Remoção durável',
    descricao:
      'Contribua para a remoção de CO₂ de forma real, segura e de longo prazo.',
  },
  {
    icon: 'fileText',
    titulo: 'Rastreabilidade',
    descricao:
      'Dados completos e transparentes, da origem do resíduo ao crédito de carbono.',
  },
  {
    icon: 'handshake',
    titulo: 'Impacto no campo',
    descricao:
      'Apoio direto a cooperativas e produtores, fortalecendo a agricultura familiar.',
  },
  {
    icon: 'shieldCheck',
    titulo: 'Origem verificável',
    descricao:
      'Projetos auditados por certificadoras independentes, com padrões internacionais.',
  },
];

function CompanySection() {
  return (
    <section className="carbono-company">
      <div className="container carbono-company-inner">
        <div className="carbono-company-intro">
          <span className="section-eyebrow carbono-company-eyebrow">
            PARA SUA EMPRESA
          </span>

          <h2 className="carbono-company-title">
            Por que sua empresa participa?
          </h2>

          <p className="carbono-company-subtitle">
            Ao apoiar projetos de remoção de carbono com origem, sua empresa
            fortalece a agricultura brasileira, impulsiona cooperativas e gera
            impacto positivo e mensurável no clima.
          </p>
        </div>

        <ul className="carbono-company-cards">
          {MOTIVOS.map((motivo) => (
            <li key={motivo.titulo} className="carbono-company-card">
              <span className="carbono-company-card-icon">
                <Icon name={motivo.icon} />
              </span>
              <h3 className="carbono-company-card-title">{motivo.titulo}</h3>
              <p className="carbono-company-card-description">
                {motivo.descricao}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default CompanySection;
