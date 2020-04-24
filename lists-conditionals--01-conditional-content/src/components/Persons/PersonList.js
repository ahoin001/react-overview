import React from 'react'
import Person from './Person/Person'

const PersonList = (props) => {

    let personsList = props.persons.map((person, index) => {

        // console.log(person)

        return <Person
            key={person.id}
            name={person.name}
            age={person.age}
            // ? NOTE this is passing an anonymous function, not an excection of a function 
            // ? Can check react ocs for other ways to pass parameters and instances
            click={() => props.deletePersonHandler(index)}
            changed={(event) => props.nameChangedHandler(event, person.id)}
        />

    })

    return (
        <div>

            {personsList}

        </div>
    )
}

export default PersonList
