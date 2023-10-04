import {useState, useEffect} from 'react';
import Card from "../../Components/Card/Card";
import baseUrl from '../../Components/Utils/api';

const Home = () => {
  const [dentista, setDentista] = useState([]);

  useEffect(() => {
    try {
      fetch(`${baseUrl}/dentista`)
        .then((res) => res.json())
        .then((data) => setDentista(data));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">
        {dentista.length
          ? dentista.map((dentista) => (
            <Card {...dentista} key={dentista.matricula} />
          ))
          : null}
      </div>
    </>
  );
};

export default Home;
