import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import baseUrl from '../Utils/api';
import ScheduleFormModal from "../ScheduleFormModal/ScheduleFormModal";
import styles from "./DetailCard.module.css";

const DetailCard = () => {
  const { id } = useParams();
  const [dentista, setDentista] = useState(undefined);




  useEffect(() => {
    //Nesse useEffect, você vai fazer um fetch na api passando o 
    //id do dentista que está vindo do react-router e carregar os dados em algum estado
    async function buscarDados() {
      fetch(`${baseUrl}/dentista?matricula=${id}`)
        .then((res) => res.json())
        .then((data) => {
          setDentista(data);
        });
    }
    buscarDados();
  }, [id]);
  return (
    //As instruções que estão com {''} precisam ser 
    //substituídas com as informações que vem da api

    <>
      {dentista ? (
        <>
          <h1>Detail about Dentist {dentista.nome} </h1>
          <section className="card col-sm-12 col-lg-6 container">
            {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
            <div
              className={`card-body row`}
            >
              <div className="col-sm-12 col-lg-6">
                <img
                  className="card-img-top"
                  src="/images/doctor.jpg"
                  alt="doctor placeholder"
                />
              </div>
              <div className="col-sm-12 col-lg-6">
                <ul className="list-group">
                  <li className="list-group-item">Nome: {dentista.nome}</li>
                  <li className="list-group-item">
                    Sobrenome: {dentista.sobrenome}
                  </li>
                  <li className="list-group-item">
                    Usuário: {dentista.usuario.username}
                  </li>
                </ul>
                <div className="text-center">
                  {/* //Na linha seguinte deverá ser feito um teste se a aplicação
              // está em dark mode e deverá utilizado o css correto */}
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    className={`btn btn-light ${styles.button
                      }`}
                  >
                    Marcar consulta
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : null}
      <ScheduleFormModal />
    </>
  );
};

export default DetailCard;
