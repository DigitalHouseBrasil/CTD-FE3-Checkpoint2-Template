import styles from "./Form.module.css";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth-context";
import api from "../services/api"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { saveEmail, saveToken, setEstadoLogin } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function logar() {
    try {
      const response = await api.post("/auth",{ 
        username: email,
        password: password,
    })
      console.log(response.data);
      saveEmail(email);
      saveToken(response.data.token);
      setEstadoLogin("Logout");
      navigate("/home");
    } catch (error) {
      alert("Erro ao logar");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    logar();
  }
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
