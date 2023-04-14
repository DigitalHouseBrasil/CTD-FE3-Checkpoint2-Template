import { useEffect } from "react";

const NotFound = () => {

  useEffect(() => {
    //Nesse useEffect, deverá ser obtido todos os dentistas da API
    //Armazena-los em um estado para posteriormente fazer um map
    //Usando o componente <Card />
  }, []);

  return (
    <>
      <h1>Página não encontrada</h1>
      <div className="card-grid container">
        <p>Tente outra rota.</p>
      </div>
    </>
  );
};

export default NotFound;