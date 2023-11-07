import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./login.css";

const dados = [
  {
    login: "usuario",
    senha: "0000",
    canDelete: false,
  },
  {
    login: "emanuel",
    senha: "1234",
    canDelete: true,
  },
  {
    login: "aurelio",
    senha: "4567",
    canDelete: true,
  },
  {
    login: "bruno",
    senha: "1234",
    canDelete: false,
  },
  {
    login: "Lucas",
    senha: "4567",
    canDelete: false,
  },
  {
    login: "Bea",
    senha: "4567",
    canDelete: false,
  },
  {
    login: "mahyara",
    senha: "1234",
    canDelete: true,
  },
];

export default function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const navigate = useNavigate();
  const { parametro } = useParams();
  console.log(parametro);

  // function entrar(){}
  const entrar = () => {
    console.log("FUNCAO ENTRAR");
    if (login == "" || senha == "") {
      setErro("Preencha os campo de login e senha");
    } else {
      // Encontra o usuário que  tem login e senha inseridos
      const usuario = dados.find(
        (dado) => dado.login === login && dado.senha === senha
      );

      if (usuario) {
        // Se o usuário for encontrado, armazena suas informações
        localStorage.setItem("info", JSON.stringify(usuario));

        setLogin("");
        setSenha("");

        navigate("/");
        // navigate(`/${login}`);
      } else {
        setErro("Login ou Senha Inválidos!");
      }
    }
  };

  return (
    <>
      <h1 className="login" style={{ marginBottom: "30px" }}>
        Login
      </h1>

      <form>
        <input
          type="text"
          placeholder="Digite Seu login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          style={{ marginBottom: "10px" }}
        />
        <br />
        <input
          type="password"
          placeholder="Digite Sua Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          style={{ marginBottom: "35px" }}
        />
        <br />
        <button type="button" onClick={entrar}>
          Entrar
        </button>
      </form>
      {erro && <p>{erro}</p>}
    </>
  );
}
