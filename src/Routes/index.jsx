import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Detail from "../pages/Detail/Detail";
import NotFound from "../pages/NotFound/NotFound";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { AppContextProvider } from "../contexts/AppContext";
import { AuthContextProvider } from "../contexts/AuthContext";
import { ProtectedRoute } from "../Components/ProtectedRoute";

export function RouteList() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ProtectedRoute>
          <AppContextProvider>
            <Routes>
              <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/dentista/:id" element={<Detail />} />
              </Route>
            </Routes>
          </AppContextProvider>
        </ProtectedRoute>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
