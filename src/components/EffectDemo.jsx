import React, { useState, useEffect, use } from 'react'



function EffectDemo() {
    const [seconds, setSeconds] = useState(0)


    useEffect(() => {
        const id = setInterval(() => setSeconds(s=>s+1),1000)
            return () => clearInterval(id) // cleanup function to clear the interval on unmount
                    
        }, [])
        

    return (
        <div style={{ border: '1px solid gray', padding : '10px', margin: '10px' }}>
            <h2>Uso del useEffect</h2>
            <p>Segundos transcurridos: {seconds} </p>
        </div>
        
    )

}
export default EffectDemo