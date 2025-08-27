import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext.jsx";

export default function Toolbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    
    const toolbarStyle = {
        padding: '10px',
        backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        textAlign: 'center'
    };
    
    return (
        <div style={toolbarStyle}>
        <h2>Toolbar</h2>
        <button onClick={toggleTheme}>
            Cambiar a tema {theme === 'light' ? 'oscuro' : 'claro'}
        </button>
        </div>
    );

}
