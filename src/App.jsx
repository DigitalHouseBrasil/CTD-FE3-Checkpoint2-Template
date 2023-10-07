import { useContext } from "react";
import { ContextGlobal } from "./contexts/global.context";
import { DefaultLayout } from "./layouts/DefaultLayout";

function App() {

  const { theme } = useContext(ContextGlobal);
  const isDarkMode = theme === "dark" || false;

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar a classe dark ou light */}
      <div className={`app ${isDarkMode ? "dark" : "light"}`}>
        <DefaultLayout />
      </div>
    </>
  );
}

export default App;
