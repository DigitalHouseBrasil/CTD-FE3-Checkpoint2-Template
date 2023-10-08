import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef, useContext } from "react";
import baseUrl from "../Utils/api";
import styles from "./ScheduleForm.module.css";
import { ContextGlobal } from "../../contexts/global.context";

const ScheduleForm = () => {
  const [dentistsFromApi, setDentistsFromApi] = useState([]);
  const [patientsFromApi, setPatientsFromApi] = useState([]);
  const [dentistsFromForm, setdentistsFromForm] = useState("");
  const [patientsFromForm, setpatientsFromForm] = useState("");
  const [dateFromForm, setDateFromForm] = useState("");
  const navigate = useNavigate();
  const modalRef = useRef(null);

  const { theme } = useContext(ContextGlobal);
  const isDarkMode = theme === "dark" || false;

  useEffect(() => {
    //Nesse useEffect, você vai fazer um fetch na api buscando TODOS os dentistas
    //e pacientes e carregar os dados em 2 estados diferentes
  }, []);

  useEffect(() => {
    let getResponseFromApiDentist = async () => {
      const dentistsFromApi = await fetch(`${baseUrl}/dentista`);
      const responseFromDentist = await dentistsFromApi.json();
      setDentistsFromApi(responseFromDentist);
    };
    let getResponseFromApiPatient = async () => {
      const patientsFromApi = await fetch(`${baseUrl}/paciente`);
      const responseFromPatient = await patientsFromApi.json();
      setPatientsFromApi(responseFromPatient);
    };
    getResponseFromApiDentist();
    getResponseFromApiPatient();
  }, []);
  useEffect(() => {}, [dentistsFromApi, patientsFromApi.body]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // alert(dentistsFromForm + " s " + patientsFromForm + "s" + dateFromForm);
    const token = localStorage.getItem("dh_token");
    const headers = new Headers();
    headers.append("Content-type", "application/json");
    headers.append("Authorization", `Bearer ${token}`);
    try {
      const consultPayload = {
        dentista: {
          matricula: dentistsFromForm,
        },
        paciente: {
          matricula: patientsFromForm,
        },
        dataHoraAgendamento: dateFromForm,
      };
      const body = {
        method: "POST",
        body: JSON.stringify(consultPayload),
        headers: headers,
      };
      const getResponseFromConsult = await fetch(`${baseUrl}/consulta`, body);
      if (getResponseFromConsult.status === 200) {
        const showConsultMarket = await getResponseFromConsult.json();
        alert(
          `Consulta marcada com sucesso com o doutor ${showConsultMarket.dentista.nome}`
        );
      }
      // redirectsToHome();
    } catch (error) {
      console.log(error);
    }
  };

  // const fecharModal = () => {
  //   // Use a referência do modal para fechar
  //   const modal = modalRef.current.style.display = 'none';
  //   modal.hide();
  // };

  // const redirectsToHome = () => {
  //   navigate("/home");
  // };

  return (
    <div className={`text-center container`}>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div
        className={`text-center container ${isDarkMode ? styles.cardDark : ""}`}
      >
        <form onSubmit={handleSubmit}>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="dentist" className="form-label">
                Dentist
              </label>
              <select
                className="form-select"
                name="dentist"
                id="dentist"
                placeholder="Nome Sobrenome"
                onClick={(e) => setdentistsFromForm(e.target.value)}
              >
                {dentistsFromApi &&
                  dentistsFromApi.map((dentistsFromApi, index) => (
                    <option key={index} value={dentistsFromApi.matricula}>
                      {`${dentistsFromApi.nome} ${dentistsFromApi.sobrenome}`}
                    </option>
                  ))}
              </select>
            </div>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="patient" className="form-label">
                Patient
              </label>
              {
                <select
                  className="form-select"
                  name="pacient"
                  id="pacient"
                  placeholder="Nome Sobrenome"
                  onClick={(e) => setpatientsFromForm(e.target.value)}
                >
                  {patientsFromApi.body &&
                    patientsFromApi.body.map((patientsFromApi, index) => (
                      <option key={index} value={patientsFromApi.matricula}>
                        {`${patientsFromApi.nome} ${patientsFromApi.sobrenome}`}
                      </option>
                    ))}
                </select>
              }
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-12">
              <label htmlFor="appointmentDate" className="form-label">
                Date
              </label>
              <input
                className="form-control"
                id="appointmentDate"
                name="appointmentDate"
                type="datetime-local"
                onChange={(e) => setDateFromForm(e.target.value)}
              />
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
            <button
              className={`btn btn-${isDarkMode ? "dark" : "light"} ${
                styles.button
              }`}
              type="submit"
            >
              Schedule
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleForm;
