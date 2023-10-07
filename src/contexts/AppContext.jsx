import { createContext, useState, useEffect } from "react";
import baseUrl from '../Components/Utils/api';

export const AppContext = createContext();

export function AppContextProvider({ children }) {
    const [dentistas, setDentistas] = useState([]);

    const getDentistas = async () => {
        try {
            const res = await fetch(`${baseUrl}/dentista`);
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
        getDentistas();
    }, [])

    const buscaDentistaPelaMatricula = (matricula) => {
        const dentista = dentistas.find(dentistas.matricula === matricula);
        return dentista;
      }


    return (
        <AppContext.Provider value={{ dentistas, buscaDentistaPelaMatricula, getDentistas }}>
            {children}
        </AppContext.Provider>
    )

}