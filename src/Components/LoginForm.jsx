import styles from "./Form.module.css";
import api from "../services/api"
import { useState } from "react";
import { async } from "q";
import { useNavigate } from "react-router";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassorwd] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    //Nesse handlesubmit você deverá usar o preventDefault,-ok
    //enviar os dados do formulário e enviá-los no corpo da requisição 
    //para a rota da api que faz o login /auth
    //lembre-se que essa rota vai retornar um Bearer Token e o mesmo deve ser salvo
    //no localstorage para ser usado em chamadas futuras
    //Com tudo ocorrendo corretamente, o usuário deve ser redirecionado a página principal,com react-router
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro
    try {
      const {data} = await api.post("/auth",{ 
        username,
        password,
    })
      navigate('/home')
    } catch (error) {
      alert("Dados Invalidos")
    }
  };

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div
        className={`text-center card container ${styles.card}`}
      >
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={handleSubmit}>
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Login"
              name="login"
              required
              onChange={(event)=>setUsername(event.target.value)}
            />
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Password"
              name="password"
              type="password"
              required
              onChange={(event)=>setPassorwd(event.target.value)}
            />
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
