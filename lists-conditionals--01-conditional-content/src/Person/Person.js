import React from 'react';
// import Radium from 'radium'
import styled from 'styled-components'

// import './Person.css';

const person = (props) => {

    // ?Only possible with Radium 
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }

    // ? Styled component: styled object has property for every html element
    const StyledDiv = styled.div`
       width: 60%;
       margin: 16px auto;
       border: 1px solid #eee;
       box-shadow: 0 2px 3px #ccc;
       padding: 16px;
       text-align: center;
    
       @media (min-width: 500px) {
         width: 450px;  
     }
    `;

    // const Button = styled.button`
    // background-color: blue;
    // width: 60%;
    //    margin: 16px auto;
    //    border: 1px solid #eee;
    //    box-shadow: 0 2px 3px #ccc;
    //    padding: 16px;
    //    text-align: center;
    //    @media (min-width: 500px) {
    //      width: 250px;  
    //  }
    // `;

    return (
        // <div className="Person" style={style}>

        <StyledDiv>

            {/* <Button /> */}
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />

        </StyledDiv>

        // </div >
    )
};

export default person;
// export default Radium(person);