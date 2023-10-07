import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import { useAuth } from "../../hooks/useAuth";
export function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("dh_token");
  useEffect(() => {
    if (!token) {
      navigate("/login");
      // return <Navigate to={"/"} replace />;
    }
  }, [navigate, token]);
  // const { token } = useAuth();

  return children;
}
