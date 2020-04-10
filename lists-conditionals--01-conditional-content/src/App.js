// * Understand Virtual DOM Better
// * NOTE : Arrow functions work well for properties because they use 'this' of thier parent
import React, { Component } from 'react';
import styled from 'styled-components';

// import Radium, { StyleRoot } from 'radium'

import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28, id: 'AW' },
      { name: 'Manu', age: 29, id: 'AWW' },
      { name: 'Stephanie', age: 26, id: 'AWWW' }
    ],
    userInputLength: 0,
    userInput: '',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((person) => {
      return person.id === id
    }
    )

    // make copy of the person to be modified
    const person = { ...this.state.persons[personIndex] }

    // Get name from user input
    person.name = event.target.value

    const personsModified = [...this.state.persons];
    personsModified[personIndex] = person

    this.setState({
      persons: personsModified
    })


  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    // ? copy array, so we don't modify state until we assign new state
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  // Task 1: Take length of input and place it in p
  inputFieldHandler = (event) => {

    const userInput = event.target.value;

    this.setState({
      userInput: userInput,
      userInputLength: userInput.length
    })

  }

  deleteCharHandler = (charIndex) => {
    // ? copy array, so we don't modify state until we assign new state

    let userInputChars = this.state.userInput.split('')

    // Remove specified char from array
    userInputChars.splice(charIndex, 1)

    // Join back into string
    userInputChars = userInputChars.join('')

    this.setState({
      userInput: userInputChars,
      userInputLength: userInputChars.length
    })

  }

 

  // Excecuted on every rerender
  render() {

    // ? Use Styled Components 
    const StyledButton = styled.button` 
      /* Pass props to styled component for use in dynamic styling */
      background-color: ${props => props.alternate ? 'red' : 'green'};
      color: white;
      font: inherit;
      border: 1px solid green;
      padding: 10px;
      cursor: pointer;
      
      /* '&' is required to let SC know hover belongs to this component */
      &:hover {
        background-color: ${props => props.alternate ? 'salmon' : 'lightgreen'};
        color: 'black'
      }`;

    let persons = null;

    if (this.state.showPersons) {

      // ? property accessed like this because it is a string
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }

      persons = (this.state.persons.map((person, index) => {

        return <div>
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            // ? TODO NOTE this is passing an anonymous function, not an excection of a function 
            click={() => this.deletePersonHandler(index)}
            changed={(event) => this.nameChangedHandler(event, person.id)} />
        </div>

      }));


    }

    // ? Dynamically add class names
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('blue')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }

    let assignedClasses = classes.join(' ')

    
      
    return (

      // ?Wrapper required for media queries and animation frames for

      <div className="App">

        <h1>List of Records</h1>
        <p className={assignedClasses}>This is Built with React</p>

        {/* <input
          type="text"
          onChange={(event) => this.inputFieldHandler(event)}
          value={this.state.userInput}
        /> */}

        <StyledButton 
        alternate= {this.state.showPersons}
        onClick={this.togglePersonsHandler}
        >

          Toggle Persons
          
        </StyledButton>
          
        {persons}

      </div>

    );

  }
}

// ?Radium is a higher order component (Adds Extra functionality by )
export default App;
// export default Radium(App);


