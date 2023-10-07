import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

export function useAuth() {
  return useContext(AuthContext);
}
