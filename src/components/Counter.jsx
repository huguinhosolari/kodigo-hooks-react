import React, { useState } from 'react'


function Counter() {
    const [count, setCount] = useState(0)
    
    return (
        <div style={{ border: '1px solid gray', padding : '10px', margin: '10px' }}>
            <h2>Uso del useState</h2>
            <p>Contador: {count}</p>
            <button onClick={() => setCount(count+1)}>Incrementar en 1</button>
            <button onClick={() => setCount(count-1)}>Decrementar en 1</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )

}
export default Counter