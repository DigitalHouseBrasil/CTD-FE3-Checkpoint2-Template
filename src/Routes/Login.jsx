import LoginForm from "../Components/LoginForm";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth-context";

const Contact = () => {
  const { saveName, saveToken } = useContext(AuthContext);
  return (
    <>
      <h1>Login</h1>
      <LoginForm />
    </>
  );
};

export default Contact;
