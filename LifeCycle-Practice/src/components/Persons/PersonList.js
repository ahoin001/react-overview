import React, {PureComponent} from 'react'
import Person from './Person/Person'


class PersonList extends PureComponent {

    constructor(props) {
        super(props);
        console.log(`[Personlist.js] constructor`)

    }


    // static getDerivedStateFromProps(props, state) {
    //   console.log('[Persons.js] getDerivedStateFromProps');
    //   return state;
    // }

    // componentWillReceiveProps(props) {
    //   console.log('[Persons.js] componentWillReceiveProps', props);
    // }

    // ? Used to tell component only to update if props are changed on rerender
    // shouldComponentUpdate(nextProps, nextState) {

    //     console.log('[Personlist.js] shouldComponentUpdate');
    //     if (
    //         nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked
    //     ) {
    //         return true
    //     } else {
    //         return false
    //     }
        
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Personlist.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!' };
    }

    // componentWillUpdate() {

    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Personlist.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[Personlist.js] componentWillUnmount');
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
