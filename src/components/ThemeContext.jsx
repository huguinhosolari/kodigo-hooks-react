// Importamos
import React, { createContext, useState } from "react";


//1. Creamos el contexto
export const ThemeContext = createContext();

//2. Creamos el proveedor del contexto
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
        //console.log(prevTheme);
};

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
