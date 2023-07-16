import React from 'react'

const Text = ({value, color}) => {
    return(
        <>
            <p style={{ textTransform: 'uppercase', color: color }} >{value}</p>
        </>
    )
}

export { Text }