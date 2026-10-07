import { useSearchParams } from 'react-router-dom';
import './Login.css';
import LoginHero from './sections/LoginHero';
import BenefitsCard from './sections/BenefitsCard';
import LoginForm from './sections/LoginForm';
import CadastroForm from './sections/CadastroForm';

function Login() {
  const [searchParams, setSearchParams] = useSearchParams();

  const mode = searchParams.get('modo') === 'cadastro' ? 'cadastro' : 'login';

  function alternarModo(novoModo) {
    setSearchParams(novoModo === 'cadastro' ? { modo: 'cadastro' } : {}, {
      replace: true,
    });
  }

  return (
    <>
      <LoginHero />
      <section className="login-section">
        <div className="container login-wrapper">
          {/* Banner lateral de benefícios — apenas na tela de cadastro */}
          {mode === 'cadastro' && <BenefitsCard />}
          <div className="login-card">
            {mode === 'login' ? (
              <LoginForm onAlternarModo={alternarModo} />
            ) : (
              <CadastroForm onAlternarModo={alternarModo} />
            )}
          </div>
         
      </div>
    </section >
    </>
  );
}

export default Login;