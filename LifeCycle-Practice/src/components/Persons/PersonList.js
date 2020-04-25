import React from 'react'
import Person from './Person/Person'


class PersonList extends React.Component {

    constructor(props) {
      super(props);
      console.log(`[Personlist.js] constructor`)
  
    }


    componentWillUnmount(){
        console.log(`[PersonList.js] will unmount`)
    }

    render() {

        let personsList = this.props.persons.map((person, index) => {

            // console.log(person)
    
            return <Person
                key={person.id}
                name={person.name}
                age={person.age}
                // ? NOTE this is passing an anonymous function, not an excection of a function 
                // ? Can check react ocs for other ways to pass parameters and instances
                click={() => this.props.deletePersonHandler(index)}
                changed={(event) => this.props.nameChangedHandler(event, person.id)}
            />
    
        })
    
        return (
            <div>
    
                {personsList}
    
            </div>
        )



    }
}


export default PersonList
