import { useEffect , useState} from "react";
import Card from "../Components/Card";
import axios from "axios";
/***import api from "../services";*/

const Home = () => {

  const [dentista, setDentista] = useState([]);
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [matricula, setMatricula] = useState("");
  const [usuario, setUsuario] = useState("");
  
  async function getDentistas(){
    try {
      const response = await axios("https://dhodonto.ctdprojetos.com.br/dentista");

      console.log(response.data);
      
    } catch (error) {
      console.log(error)
    }
  }

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
        {dentista.map((d)=>(
          <div key={d.matricula}>
            
          </div>
        ))}
        <Card 
        
        />
        
      </div>
    </>
  );
};

export default Home;
