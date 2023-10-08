import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Detail from "../pages/Detail/Detail";
import { AppContextProvider } from "../contexts/AppContext";
import { AuthContextProvider } from "../contexts/AuthContext";
import { ProtectedRoute } from "../Components/ProtectedRoute";
import { ContextProvider } from "../contexts/global.context";
import App from "../App";


export function RouteList() {
    return (
        <BrowserRouter>
            <ContextProvider>
                <AuthContextProvider>
                    <ProtectedRoute>
                        <AppContextProvider>
                            <Routes>
                                <Route path="/" element={<App />}>
                                    <Route path="/home" element={<Home />} />
                                    <Route path="/login" element={<Login />} />
                                    <Route path="/dentista/:id" element={<Detail />} />
                                </Route>
                            </Routes>
                        </AppContextProvider>
                    </ProtectedRoute>
                </AuthContextProvider>
            </ContextProvider>
        </BrowserRouter>
    );
}
