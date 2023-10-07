import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import { useAuth } from "../../hooks/useAuth";
export function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("dh_token");
  useEffect(() => {
    console.log(token);
    if (!token) {
      console.log(token);
      navigate("/login");
      // return <Navigate to={"/"} replace />;
    }
  }, [navigate, token]);
  // const { token } = useAuth();

  return children;
}
