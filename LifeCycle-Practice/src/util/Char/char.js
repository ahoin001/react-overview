import React from 'react'

const Char = props => {

    const styling = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    }


    return (
        <div style={styling} onClick={props.click}>
            {props.char}
        </div>
    )
}



export default Char
