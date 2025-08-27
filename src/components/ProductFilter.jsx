import React, { useState, useMemo } from 'react';

const productBrands = [
    "Apple",
    "Samsung",
    "Microsoft",
    "Lenovo",
    "Asus",
    "Acer",
    "HP",
    "Huawei",
    "Dell",
    "Sony",
    "LG",
];

export default function ProductFilter() {
    const [query, setQuery] = useState("");
    // contador para forzar re-renders
    const [count, setCount] = useState(0);

    // useMemo para evitar recalcular el filtrado si el query no ha cambiado
    const filtered = useMemo(() => {
        console.log("Filtrando productos...");
        return productBrands.filter((p) =>
            p.toLowerCase().includes(query.toLowerCase())
        );
    }, [query]);

    return (
        <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
            <h2>React Hooks Demo - useMemo</h2>
            <input 
                type="text" 
                placeholder="Buscar producto..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <ul>
                {filtered.map((p, i) => (
                    <li key={i}>{p}</li>
                ))}
            </ul>
            <p>Re-renders: {count}</p>
            <button onClick={() => setCount(count+1)}>Forzar re-render</button>
        </div>
    );

}
