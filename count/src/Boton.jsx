import React, { useState } from 'react'


export default function Boton() {
    const [count, setCount] = useState(0);
    const [texto, setTexto] = useState();
    

    function handleClick() {
        setCount(count + 1);
        setTexto("Hola");
    }

    function changeText() {
        
    }

    return (
        <div>
            <button onClick={ () => {
                handleClick();
                changeText();
            }}>soy un boton {count}</button>
            <p>{texto} {count}</p>
            <button onClick={handleClick}>Click con modulo {count}</button>
        </div>
    )
}
