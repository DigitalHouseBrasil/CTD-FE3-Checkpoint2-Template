
// import { Outlet } from "react-router-dom";
// import Footer from "./Components/Footer";
// import Navbar from "./Components/Navbar";
import { RouteList } from "./Routes";

function App() {
  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar a classe dark ou light */}
      <div className={`app light}`}>
        {/* <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer /> */}
        <RouteList />
      </div>
    </>
  );
}

export default App;
