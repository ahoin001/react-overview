// * Have as few stateful components as possible, Folder structure, 
// * Understand diffferent ways of styling components
// * Understand Virtual DOM Better
// * NOTE : Arrow functions work well for properties because they use 'this' of thier parent

import React, { Component } from 'react';
import * as Styled from './AppStyles';

import PersonList from '../components/Persons/PersonList';
import Cockpit from '../components/cockpit/Cockpit'

class App extends Component {

  constructor(props) {
    super(props);
    console.log(`[App.js] constructor`)

  }
  

  // ?State can be initialized like this and create constructor behind the scenes
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

  static getDerivedStateFromProps(props,state) {
    
    console.log(`[App.js] getDerivedStateFromProps`, props)

    return state
  }


  componentDidMount() {
    console.log(`[App.js] componentDidMount`)
  }

  // deprecated
  // componentWillMount() {
  //   console.log(`[App.js] componentWillMount`)
  // }

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

    console.log(`[App.js] render`)
    let personList = null;

    if (this.state.showPersons) {

      personList =
        <PersonList
          persons={this.state.persons}
          deletePersonHandler={this.deletePersonHandler}
          nameChangedHandler={this.nameChangedHandler}
        />

    }

    return (

      <Styled.AppContainer>

        <Cockpit
          persons={this.state.persons}
          showingPersons={this.state.showPersons}
          togglePersons={this.togglePersonsHandler}
        />

        {personList}

      </Styled.AppContainer>

    );

  }
}

export default App;

