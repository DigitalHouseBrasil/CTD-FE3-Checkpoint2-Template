import { useEffect, useState } from "react";
import Card from "../Components/Card/Card";

const Home = () => {

  const [dentistas, setDentistas] = useState([]);

  const getDentistas = async () => {
    try {
      const res = await fetch('https://dhodonto.ctd.academy/dentista');
      if (!res.ok) {
        throw new Error(`Failed to fetch dentista data: ${res.statusText}`);
      }
      const data = await res.json();
      setDentistas(data);
    } catch (error) {
      console.error('Error fetching dentistas:', error);
    }
  };

  useEffect(() => {
    //Nesse useEffect, deverá ser obtido todos os dentistas da API
    //Armazena-los em um estado para posteriormente fazer um map
    //Usando o componente <Card />
    getDentistas();

  }, []);

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">
      {dentistas.length
        ?
        dentistas.map((dentista, index) => (
          <Card key={index} dentista={dentista} />
        ))
        : null}
      </div>
    </>
  );
};

export default Home;
