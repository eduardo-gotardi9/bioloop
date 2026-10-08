import Icon from '../../../components/Icon/Icon';
import './ProcessSection.css'
import ResiduosOrganicos from '../../../assets/images/residuos-organicos.jpg';
import Triturador from '../../../assets/images/triturador.png';
import Pirolise from '../../../assets/images/pirolise.png';
import Biofertilizante from '../../../assets/images/biofertilizante.png';
import Certificacao from '../../../assets/images/certificacao.png';
const ETAPAS = [
  {
    numero: '01',
    titulo: 'Receber resíduos',
    descricao:
      'Resíduos agroindustriais como casca, bagaço, palha e dejetos são coletados e encaminhados para a unidade de processamento.',
    imagem: ResiduosOrganicos,
    imagemAlt: 'Resíduos agroindustriais sendo coletados',
  },
  {
    numero: '02',
    titulo: 'Preparar biomassa',
    descricao:
      'Os resíduos são triturados, secos e padronizados para garantir eficiência no processo de pirólise.',
    imagem: Triturador,
    imagemAlt: 'Biomassa triturada e preparada para pirólise',
  },
  {
    numero: '03',
    titulo: 'Produzir biochar',
    descricao:
      'A biomassa é submetida à pirólise controlada entre 300 e 700°C, com pouco ou nenhum oxigênio, gerando biochar, bio-óleo e syngás (reaproveitado para alimentar o forno).',
    imagem: Pirolise,
    imagemAlt: 'Forno de pirólise produzindo biochar',
  },
  {
    numero: '04',
    titulo: 'Aplicar no solo',
    descricao:
      'O biochar é usado como condicionador de solo e base para biofertilizante, contribuindo para a saúde do solo e a produtividade das lavouras.',
    imagem: Biofertilizante,
    imagemAlt: 'Biochar aplicado no solo de uma lavoura',
  },
  {
    numero: '05',
    titulo: 'Certificar e comercializar',
    descricao:
      'Toda a produção é registrada e auditada por certificadoras independentes, como Puro.earth ou Verra, gerando créditos de carbono (CORCs) que são comercializados com empresas compradoras.',
    imagem: Certificacao,
    imagemAlt: 'Certificação e comercialização de créditos de carbono',
  },
];

function ProcessSection() {
  return (
    <section className="carbono-process" id="processo">
      <div className="container carbono-process-inner">
        <span className="section-eyebrow carbono-process-eyebrow">
          NOSSO PROCESSO
        </span>

        <h2 className="carbono-process-title">
          Do resíduo ao carbono certificado.
        </h2>

        <p className="carbono-process-subtitle">
          Um ciclo completo que transforma resíduos agroindustriais em biochar,
          com rastreabilidade e verificação independente.
        </p>

        <ol className="carbono-process-steps">
          {ETAPAS.map((etapa, index) => (
            <li key={etapa.numero} className="carbono-process-step">
              <img
                className="carbono-process-step-media"
                src={etapa.imagem}
                alt={etapa.imagemAlt}
              />
              <span className="carbono-process-step-number">{etapa.numero}</span>
              <h3 className="carbono-process-step-title">{etapa.titulo}</h3>
              <p className="carbono-process-step-description">{etapa.descricao}</p>

              {index < ETAPAS.length - 1 && (
                <span className="carbono-process-arrow" aria-hidden="true">
                  <Icon name="arrowRight" />
                </span>
              )}
            </li>
          ))}
        </ol>

        <div className="carbono-process-arrows" aria-hidden="true">
          {ETAPAS.slice(1).map((etapa) => (
            <span
              key={etapa.numero}
              className="carbono-process-arrow"
            >
              <Icon name="arrowRight" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
