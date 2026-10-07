import { useState } from 'react';
import './LoginForm.css';

function LoginForm({ onAlternarModo }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erros, setErros] = useState({});

  function limparErro(campo) {
    setErros((estado) => {
      if (!estado[campo]) return estado;
      const novoEstado = { ...estado };
      delete novoEstado[campo];
      return novoEstado;
    });
  }

  function validarFormulario() {
    const novosErros = {};
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

    if (!email.trim()) {
      novosErros.email = 'Informe o e-mail.';
    } else if (!emailValido) {
      novosErros.email = 'Digite um e-mail válido, como usuario@dominio.com.';
    }

    if (!senha) novosErros.senha = 'Informe a senha.';

    return novosErros;
  }

  function enviarLogin(event) {
    event.preventDefault();

    const novosErros = validarFormulario();
    setErros(novosErros);

    if (Object.keys(novosErros).length > 0) return;

    const dados = { email, senha };

    // TODO: integração com a API de autenticação.
    console.log('Login:', dados);
  }

  return (
    <form className="login-form" onSubmit={enviarLogin} noValidate>
      <h2 className="login-form-title">Entrar</h2>

      <div className="form-field">
        <label htmlFor="login-email">E-mail</label>
        <input
          id="login-email"
          name="email"
          type="email"
          placeholder='Digite seu e-mail'
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            limparErro('email');
          }}
          autoComplete="email"
          required
          aria-invalid={Boolean(erros.email)}
        />
        {erros.email && <small className="form-error">{erros.email}</small>}
      </div>

      <div className="form-field">
        <label htmlFor="login-senha">Senha</label>
        <input
          id="login-senha"
          name="senha"
          type="password"
          value={senha}
          placeholder='Digite sua senha'
          onChange={(event) => {
            setSenha(event.target.value);
            limparErro('senha');
          }}
          autoComplete="current-password"
          required
          aria-invalid={Boolean(erros.senha)}
        />
        {erros.senha && <small className="form-error">{erros.senha}</small>}
      </div>

      <button type="submit" className="btn btn-primary form-submit">
        Entrar
      </button>

      <p className="login-alternar">
        Ainda não tem cadastro?{' '}
        <button
          type="button"
          className="login-link"
          onClick={() => onAlternarModo('cadastro')}
        >
          Cadastre-se
        </button>
      </p>
    </form>
  );
}

export default LoginForm;
