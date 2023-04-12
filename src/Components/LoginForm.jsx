import styles from "./Form.module.css";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth-context";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { saveName, saveToken } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function logar() {
    try {
      const response = await axios.post("https://dhodonto.ctdprojetos.com.br/auth", { username: email, password: password });
      console.log(response.data);
      saveToken(response.data.token);
      navigate("/home");
    } catch (error) {
      alert("Erro ao logar");
    }
  }

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div
        className={`text-center card container ${styles.card}`}
      >
        <div className={`card-body ${styles.CardBody}`}>
          <div className="styles.loginForm">
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Login"
              name="login"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button className="btn btn-primary" onClick={logar}>
              Send
            </button>        </div>
          </div>
      </div>
    </>
  );
};

export default LoginForm;
