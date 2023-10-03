import styles from "./Form.module.css";
import {useEffect, useState} from "react"

const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
     
        let connectWithApi = async () => {
        try {
          const dataFromUser = {
            "username" : username,
            "password" : password  
          }
          const body = {
            method: 'POST',
            body: JSON.stringify(dataFromUser),
            headers: new Headers({
              'Content-Type' : 'application/json',
            })
          }
      
          const connectWithApi = await fetch ("https://dhodonto.ctd.academy/auth", body)
          if (!connectWithApi.ok) {
            throw new Error("Erro ao buscar as credenciais do usuario no BD")
          }
          const getResponse = await connectWithApi.json();
          console.log(getResponse);
          alert("Usuario logou corretamente")
          validateInputsFromUser()
        } catch (error) {
          console.log(`Error connecting with auth with status ${error}`);
        }
      }

      let validateInputsFromUser = (e) => {
        console.log(username);
        console.log(password);
        e.preventDefault();
        if (username.length < 5) {
          alert("Campo de usuario deve ser maior do que 5")
        }else{
          connectWithApi();
        }
        
      }
    //Nesse handlesubmit você deverá usar o preventDefault,
    //enviar os dados do formulário e enviá-los no corpo da requisição 
    //para a rota da api que faz o login /auth
    //lembre-se que essa rota vai retornar um Bearer Token e o mesmo deve ser salvo
    //no localstorage para ser usado em chamadas futuras
    //Com tudo ocorrendo corretamente, o usuário deve ser redirecionado a página principal,com react-router
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro
 

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div
        className={`text-center card container ${styles.card}`}
      >
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={validateInputsFromUser}>
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Login"
              name="login"
              value={username}
              onChange={e => setUserName(e.target.value)}
              //required
            />
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Password"
              name="password"
              type="password"
              value={password}
              onChange={e => setPassWord(e.target.value)}
              //required
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
