import Icon from '../../../components/Icon/Icon';
import './ImpactBanner.css'
const IMPACTOS = [
  {
    icon: 'leaf',
    titulo: 'Resíduo agroindustrial',
    descricao: 'Aproveitamento de resíduos que hoje são descartados.',
  },
  {
    icon: 'flask',
    titulo: 'Pirólise controlada',
    descricao:
      'Tecnologia segura e eficiente (300–700°C, pouco oxigênio).',
  },
  {
    icon: 'cloud',
    titulo: 'Biochar de longa permanência',
    descricao: 'Retenção de carbono no solo por centenas de anos.',
  },
  {
    icon: 'shieldCheck',
    titulo: 'Auditoria independente',
    descricao:
      'Dados e processos verificados por certificadoras internacionais.',
  },
];

function ImpactBand() {
  return (
    <section className="carbono-impact-band">
      <div className="container carbono-impact-band-inner">
        <span className="section-eyebrow carbono-impact-band-eyebrow">
          IMPACTO EM CADA ETAPA
        </span>

        <ul className="carbono-impact-band-list">
          {IMPACTOS.map((impacto) => (
            <li key={impacto.titulo} className="carbono-impact-band-item">
              <span className="carbono-impact-band-icon">
                <Icon name={impacto.icon} />
              </span>
              <h3 className="carbono-impact-band-title">{impacto.titulo}</h3>
              <p className="carbono-impact-band-description">
                {impacto.descricao}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ImpactBand;
