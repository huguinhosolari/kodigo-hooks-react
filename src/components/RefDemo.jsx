import React, { useRef, useState } from 'react'


function RefDemo() {

    const div1Ref = useRef(null);
    const div2Ref = useRef(null);
    const div3Ref = useRef(null);
    const [infoDiv, setInfoDiv] = useState(null);

    const mostrarInfoDiv = (divNumber) => {
        const div = divNumber === 1 ? div1Ref.current :
                    divNumber === 2 ? div2Ref.current :
                    div3Ref.current;

        if (div) {
            const info = {
                numero: divNumber,
                texto: div.textContent,
                clases: div.className || 'Sin Clases',
                ancho: div.offsetWidth + 'px',
                alto: div.offsetHeight + 'px',
                estilosEnLinea: div.style.ccsText || 'Sin estilos en línea',
                tag: div.tagName
            };
            setInfoDiv(info);
        }
    };

        return (
            <div style={{ border: '1px solid gray', padding : '10px', margin: '10px' }}>
                <h2>Uso de useRef</h2>
                <div
                    ref={div1Ref}
                    className="div-rojo"
                    style={{
                        padding: '15px', 
                        backgroundColor: '#ffcccc', 
                        margin: '10px', 
                        border: '2px solid red'}}
                >
                    Div 1 - Este es el primer div
                </div>

                <div
                    ref={div2Ref}
                    className="div-azul grande"
                    style={{
                        padding: '20px', 
                        backgroundColor: '#ccccff', 
                        margin: '10px', 
                        border: '2px solid blue',
                        fontSize: '18px'}}
                >
                    Div 2 - Este es el segundo div
                </div>

                <div
                    ref={div3Ref}
                    className="div-verde redondo"
                    style={{
                        padding: '10px', 
                        backgroundColor: '#ccffcc', 
                        margin: '10px', 
                        border: '2px solid green',
                        borderRadius: '10px'}}
                >
                    Div 3 - Este es el tercer div
                </div>

                <div style={{ marginTop: '20px' }}>
                    <button onClick={() => mostrarInfoDiv(1)} style={{ marginRight: '10px', padding: '8px 16px', cursor: 'pointer'}}>
                        Mostrar info Div 1
                        </button> 

                    <button onClick={() => mostrarInfoDiv(2)} style={{ marginRight: '10px', padding: '8px 16px', cursor: 'pointer'}}>
                        Mostrar info Div 2
                        </button> 

                    <button onClick={() => mostrarInfoDiv(3)} style={{ padding: '8px 16px', cursor: 'pointer'}}>
                        Mostrar info Div 3
                        </button> 
                </div>

                {infoDiv && (
                    <div style={{ 
                        marginTop: '20px',
                        padding: '15px',
                        backgroundColor: '#f5f5f5',
                        border: '1px solid #ddd',
                        borderRadius: '5px'
                    }}>
                        <h3>Información del div con el que llegamos a través de useRef</h3>
                        <p><strong>Número:</strong> {infoDiv.numero}</p>
                        <ul style={{listStyle: 'none', padding: 0}}>
                            <li><strong>Texto: </strong>{infoDiv.texto}</li>
                            <li><strong>Clases: </strong>{infoDiv.clases}</li>
                            <li><strong>Ancho: </strong>{infoDiv.ancho}</li>
                            <li><strong>Alto: </strong>{infoDiv.alto}</li>
                            <li><strong>Estilos: </strong>{infoDiv.estilosEnLinea}</li>
                            <li><strong>Tag: </strong>{infoDiv.tag}</li>
                        </ul>
                    </div>
                )}
            </div>
        );
}
export default RefDemo;