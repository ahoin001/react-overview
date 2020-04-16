// * Understand Virtual DOM Better
// * NOTE : Arrow functions work well for properties because they use 'this' of thier parent
import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

import PersonList from '../components/Persons/PersonList';

// ? Use Styled Components 
// ! STYLED COMPONENT MUST BE MADE OUTSIDE OF COMPONENT TO PREVENT 
// ! STRANGE BEHAVIORS SUCH AS INPUT CHANGES ETC

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

class App extends Component {
  state = {
    persons: [
      { name: 'Alex', age: 28, id: 'AW' },
      { name: 'Rex', age: 29, id: 'AWW' },
      { name: 'Cody', age: 26, id: 'AWWW' }
    ],
    userInputLength: 0,
    userInput: '',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

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

  // ? Excecuted on every rerender
  render() {

    let personList = null;

    if (this.state.showPersons) {

      personList = 
      <PersonList
        persons={this.state.persons}
        deletePersonHandler={this.deletePersonHandler}
        nameChangedHandler={this.nameChangedHandler}
      />

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

      <div className="App">

        <h1>List of Records</h1>
        <p className={assignedClasses}>This is Built with React</p>

        <StyledButton
          alternate={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >

          Toggle Persons

        </StyledButton>

        {personList}

      </div>

    );

  }
}

export default App;

