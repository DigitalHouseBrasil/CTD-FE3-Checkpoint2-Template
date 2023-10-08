import styles from "./Form.module.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useContext } from "react";
import { ContextGlobal } from "../../contexts/global.context";
import {
  getTokenFromStorage,
  setTokenInStorage,
} from "../../services/localStorage/localStorage.service";
import baseUrl from "../Utils/api";

const LoginForm = () => {
  const { setLogin } = useContext(ContextGlobal);
  const navigate = useNavigate();
  const avisoDeLogErrado = useRef(null);
  const { validaUsuarioLogado } = useAuth();
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");

  let connectWithApi = async () => {
    try {
      const dataFromUser = {
        username: username,
        password: password,
      };
      const body = {
        method: "POST",
        body: JSON.stringify(dataFromUser),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      };

      const connectWithApi = await fetch(`${baseUrl}/auth`, body);
      if (!connectWithApi.ok) {
        avisoDeLogErrado.current.style.display = "block";
        throw new Error("Erro ao buscar as credenciais do usuario no BD");
      }
      const getResponse = await connectWithApi.json();
      if (getResponse.token) {
        validaUsuarioLogado(username, getResponse.token);
        navigate("/home");
        setTokenInStorage(getResponse.token);
        alert("Usuario logou corretamente");
      }
    } catch (error) {
      console.log(`Error connecting with auth with status ${error}`);
    }
  };

  let validateInputsFromUser = async (e) => {
    e.preventDefault();
    let passwordRegex = /^(?=.*\d)(?=.*[a-z]).{8,}$/;
    if (username.length < 5 || passwordRegex.test(password) === false) {
      avisoDeLogErrado.current.style.display = "block";
    } else {
      connectWithApi();
      setLogin();
    }
  };
  //   //Nesse handlesubmit você deverá usar o preventDefault,
  //   //enviar os dados do formulário e enviá-los no corpo da requisição
  //   //para a rota da api que faz o login /auth
  //   //lembre-se que essa rota vai retornar um Bearer Token e o mesmo deve ser salvo
  //   //no localstorage para ser usado em chamadas futuras
  //   //Com tudo ocorrendo corretamente, o usuário deve ser redirecionado a página principal,com react-router
  //   //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className={`text-center card container ${styles.card}`}>
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={validateInputsFromUser}>
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Login"
              name="login"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              //required
            />

            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassWord(e.target.value)}
              //required
            />
            <span ref={avisoDeLogErrado} className="text-danger">
              Verifique suas informações novamente.
            </span>
            <button
              className="btn btn-primary"
              type="submit"
              onClick={validateInputsFromUser}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
