import { useContext } from "react";
import Card from "../../Components/Card/Card";
import { AppContext } from '../../contexts/AppContext';

const Home = () => {
  const { dentistas } = useContext(AppContext);

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
