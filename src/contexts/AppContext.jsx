import { createContext, useState, useEffect, useCallback } from "react";

export const AppContext = createContext();

export function AppContextProvider({children}) {
    const [dentistas, setDentistas] = useState([]);

    const getDentistas = useCallback ((() => async () => {
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
        return dentistas;
      }),[dentistas]);
    
      useEffect(() => {
        //Nesse useEffect, deverá ser obtido todos os dentistas da API
        //Armazena-los em um estado para posteriormente fazer um map
        //Usando o componente <Card />
        getDentistas();
    
      }, [getDentistas]);
    

}