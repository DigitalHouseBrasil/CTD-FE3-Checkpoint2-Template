import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./Routes/Detail";
import NotFound from "./Routes/NotFound";
import { useContext } from "react";
import { ThemeContext } from "./contexts/theme-context";


function App() {
  const { theme, handleChangeTheme } = useContext(ThemeContext);

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar a classe dark ou light */}
      <div className={`{app ${theme}}`}>
          <Navbar />
          <main>
            <Outlet />
            <BrowserRouter>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/detail/:matricula" element={<Detail />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </main>
          <Footer />
      </div>
    </>
  );
}

export default App;
