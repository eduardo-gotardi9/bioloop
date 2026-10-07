import { useState } from 'react';
import Icon from '../../../components/Icon/Icon';
import './CadastroForm.css';


function CadastroForm({ onAlternarModo }) {
  const [tipoPublico, setTipoPublico] = useState('cooperativa');
  const [tipoCadastro, setTipoCadastro] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erros, setErros] = useState({});

  const exigeCpf = tipoCadastro === 'produtor' || tipoCadastro === 'outro';
  const exigeCnpj = tipoCadastro === 'cooperativa' || tipoCadastro === 'empresa';

  function limparErro(campo) {
    setErros((estado) => {
      if (!estado[campo]) return estado;
      const novoEstado = { ...estado };
      delete novoEstado[campo];
      return novoEstado;
    });
  }

  function alterarTipo(valor) {
    setTipoCadastro(valor);
    limparErro('tipoCadastro');
    limparErro('cpf');
    limparErro('cnpj');
  }

  function selecionarCooperativa() {
    setTipoPublico('cooperativa');
    setTipoCadastro('');
    limparErro('tipoCadastro');
    limparErro('cpf');
    limparErro('cnpj');
  }

  function selecionarEmpresa() {
    setTipoPublico('empresa');
    setTipoCadastro('');
    limparErro('tipoCadastro');
    limparErro('cpf');
    limparErro('cnpj');
  }

  function validarFormulario() {
    const novosErros = {};
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    const cpfDigitos = cpf.replace(/\D/g, '');
    const cnpjDigitos = cnpj.replace(/\D/g, '');

    if (!tipoCadastro) novosErros.tipoCadastro = 'Selecione o tipo de cadastro.';

    if (!nome.trim()) novosErros.nome = 'Informe o nome completo.';

    if (!email.trim()) {
      novosErros.email = 'Informe o e-mail.';
    } else if (!emailValido) {
      novosErros.email = 'Digite um e-mail válido, como usuario@dominio.com.';
    }

    if (exigeCpf && cpfDigitos.length !== 11) {
      novosErros.cpf = 'Informe um CPF com 11 dígitos.';
    }

    if (exigeCnpj && cnpjDigitos.length !== 14) {
      novosErros.cnpj = 'Informe um CNPJ com 14 dígitos.';
    }

    if (!senha) {
      novosErros.senha = 'Informe a senha.';
    } else if (senha.length < 6) {
      novosErros.senha = 'A senha deve ter pelo menos 6 caracteres.';
    }

    if (!confirmarSenha) {
      novosErros.confirmarSenha = 'Confirme a senha.';
    } else if (confirmarSenha !== senha) {
      novosErros.confirmarSenha = 'As senhas não coincidem.';
    }

    return novosErros;
  }

  function enviarCadastro(event) {
    event.preventDefault();

    const novosErros = validarFormulario();
    setErros(novosErros);

    if (Object.keys(novosErros).length > 0) return;

    const dados = {
      tipoCadastro,
      nome,
      email,
      documento: exigeCnpj ? cnpj : cpf,
      senha,
    };

    // TODO: integração com a API de cadastro.
    console.log('Cadastro:', dados);
  }

  return (
    <form className="cadastro-form" onSubmit={enviarCadastro} noValidate>
      <h2 className="cadastro-form-title">Crie sua conta</h2>
      <p className="cadastro-form-subtitle">
        Preencha os dados abaixo para começar a usar o BioLoop.
      </p>

      <div className="login-publico-toggle">
        <button
          type="button"
          className={
            tipoPublico === 'cooperativa'
              ? 'login-publico-btn login-publico-btn-active'
              : 'login-publico-btn'
          }
          aria-pressed={tipoPublico === 'cooperativa'}
          onClick={selecionarCooperativa}
        >
          <Icon name="users" />
          Cooperativa / Produtor
        </button>
        <button
          type="button"
          className={
            tipoPublico === 'empresa'
              ? 'login-publico-btn login-publico-btn-active'
              : 'login-publico-btn'
          }
          aria-pressed={tipoPublico === 'empresa'}
          onClick={selecionarEmpresa}
        >
          <Icon name="building" />
          Empresa / Comprador
        </button>
      </div>

      <div className="form-field">
        <label htmlFor="cadastro-tipo">Tipo de cadastro</label>
        <select
          id="cadastro-tipo"
          name="tipoCadastro"
          value={tipoCadastro}
          onChange={(event) => alterarTipo(event.target.value)}
          required
          aria-invalid={Boolean(erros.tipoCadastro)}
        >
          <option value="">Selecione o tipo</option>
          {tipoPublico === 'cooperativa' ? (
            <>
              <option value="produtor">Produtor rural</option>
              <option value="cooperativa">Cooperativa</option>
            </>
          ) : (
            <>
              <option value="empresa">Empresa / Comprador</option>
              <option value="outro">Outro</option>
            </>
          )}
        </select>
        {erros.tipoCadastro && (
          <small className="form-error">{erros.tipoCadastro}</small>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="cadastro-nome">Nome completo / Razão social</label>
        <input
          id="cadastro-nome"
          name="nome"
          type="text"
          value={nome}
          onChange={(event) => {
            setNome(event.target.value);
            limparErro('nome');
          }}
          autoComplete="name"
          required
          aria-invalid={Boolean(erros.nome)}
        />
        {erros.nome && <small className="form-error">{erros.nome}</small>}
      </div>

      <div className="form-field">
        <label htmlFor="cadastro-email">E-mail</label>
        <input
          id="cadastro-email"
          name="email"
          type="email"
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

      {exigeCpf && (
        <div className="form-field">
          <label htmlFor="cadastro-cpf">CPF</label>
          <input
            id="cadastro-cpf"
            name="cpf"
            type="text"
            inputMode="numeric"
            placeholder="Somente números"
            value={cpf}
            onChange={(event) => {
              setCpf(event.target.value);
              limparErro('cpf');
            }}
            required
            aria-invalid={Boolean(erros.cpf)}
          />
          {erros.cpf && <small className="form-error">{erros.cpf}</small>}
        </div>
      )}

      {exigeCnpj && (
        <div className="form-field">
          <label htmlFor="cadastro-cnpj">CNPJ</label>
          <input
            id="cadastro-cnpj"
            name="cnpj"
            type="text"
            inputMode="numeric"
            placeholder="Somente números"
            value={cnpj}
            onChange={(event) => {
              setCnpj(event.target.value);
              limparErro('cnpj');
            }}
            required
            aria-invalid={Boolean(erros.cnpj)}
          />
          {erros.cnpj && <small className="form-error">{erros.cnpj}</small>}
        </div>
      )}

      <div className="form-field">
        <label htmlFor="cadastro-senha">Senha</label>
        <input
          id="cadastro-senha"
          name="senha"
          type="password"
          value={senha}
          onChange={(event) => {
            setSenha(event.target.value);
            limparErro('senha');
          }}
          autoComplete="new-password"
          required
          aria-invalid={Boolean(erros.senha)}
        />
        {erros.senha && <small className="form-error">{erros.senha}</small>}
      </div>

      <div className="form-field">
        <label htmlFor="cadastro-confirmar-senha">Confirmação de senha</label>
        <input
          id="cadastro-confirmar-senha"
          name="confirmarSenha"
          type="password"
          value={confirmarSenha}
          onChange={(event) => {
            setConfirmarSenha(event.target.value);
            limparErro('confirmarSenha');
          }}
          autoComplete="new-password"
          required
          aria-invalid={Boolean(erros.confirmarSenha)}
        />
        {erros.confirmarSenha && (
          <small className="form-error">{erros.confirmarSenha}</small>
        )}
      </div>

      <button type="submit" className="btn btn-primary form-submit">
        Criar conta
      </button>

      <p className="login-alternar">
        Já tem uma conta?{' '}
        <button
          type="button"
          className="login-link"
          onClick={() => onAlternarModo('login')}
        >
          Entrar
        </button>
      </p>
    </form>
  );
}

export default CadastroForm;
