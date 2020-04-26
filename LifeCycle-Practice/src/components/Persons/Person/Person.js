import React from 'react';
import PropTypes from 'prop-types'; 


import * as Styled from './PersonStyles'

// import Aux from '../../../hoc/Aux'
import withClass from '../../../hoc/withClass'

import './Person.css'

// ? Approach with styled components from external file
const person = (props) => {
    console.log(`[Person.js] rendering`)

    return (

            
            <Styled.PersonContainer>

                <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
                <p>{props.children}</p>
                <input type="text" onChange={props.changed} value={props.name} />

            </Styled.PersonContainer>

    
    )
};

export default withClass(person,'green-text', () => {
    console.log('I wrapped person component in a div with green text class, and logged this line');
}
);

person.propTypes = {

    click : PropTypes.func,
    changed : PropTypes.func,
    name : PropTypes.string,
    age : PropTypes.number,
    value : PropTypes.string,

}

// ? Approach with styled components in same file

// import styled from 'styled-components'

    // ! STYLED COMPONENT MUST BE MADE OUTSIDE OF COMPONENT TO PREVENT 
    // ! STRANGE BEHAVIORS SUCH AS INPUT CHANGES ETC

    // ? Styled component: styled object has property for every html element
    // const StyledDiv = styled.div`
    //    width: 60%;
    //    margin: 16px auto;
    //    border: 1px solid #eee;
    //    box-shadow: 0 2px 3px #ccc;
    //    padding: 16px;
    //    text-align: center;

    //    @media (min-width: 500px) {
    //      width: 450px;  
    //  }
    // `;

    // const person = (props) => {

    //     return (

    //         <StyledDiv>

    //             <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
    //             <p>{props.children}</p>
    //             <input type="text" onChange={props.changed} value={props.name} />

    //         </StyledDiv>

    //     )
    // };

    // export default person;




