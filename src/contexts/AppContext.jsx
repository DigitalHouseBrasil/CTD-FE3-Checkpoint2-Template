import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
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
        getDentistas();
    }, [])


    return (
        <AppContext.Provider value={{ dentistas, getDentistas }}>
            {children}
        </AppContext.Provider>
    )

}