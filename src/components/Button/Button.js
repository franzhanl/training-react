import React from 'react';

const Button = ({label = 'Botão'}) => {
    return(
        <>
            <button onClick={ () => {alert(`A label desse botão é: ${label}`)} } >{label}</button>
        </>
    )
}



export { Button }