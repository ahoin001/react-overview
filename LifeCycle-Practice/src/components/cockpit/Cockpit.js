import React,{useEffect} from 'react'
import PropTypes from 'prop-types'
import * as Styled from './CockpitStyles'

const Cockpit = props => {

    // ? Can Handle all update lifecycle methods from Class Components
    // ? Runs when component is created or when dependancy is changed (replaces didMount, didUpdate , willunmount(if ))
    useEffect(() => {
       
        console.log(`[Cockpit.js] useEffect`)

       const timer = setTimeout(() => {
            alert('Change made to persons list')
        }, 2000);

        // ? This runs when component is unmounted
        return () => {

            clearTimeout(timer)
            console.log(`[Cockpit.js] cleanup work....  unmounting`)    

        }
        

    }, 
    // [props.persons]
    )

    useEffect(() => {
       
        console.log(`[Cockpit.js] 2nd useEffect`)

       
        return () => {
            console.log(`[Cockpit.js] cleanup workin 2nd effect....  unmounting`)    
        }
        

    }, [props.persons])
    
    // ? Empty array makes it onnly run the first time component mounts
    // useEffect(() => {
       
    //     console.log(`[Cockpit.js] useEffect`)

    //     setTimeout(() => {
    //         alert('Component mounted')
    //     }, 1000);

    // }, [])

    return (

        <React.Fragment>

            <h1>List of Records</h1>

            <Styled.ListSubtitle 
            listlength = {props.persons.length}
            > 
            
            This is Built with React 
            
            </Styled.ListSubtitle> 

            <Styled.AppContainerButton
                alternate={props.showingPersons}
                onClick={props.togglePersons}
            >

                Toggle Persons

            </Styled.AppContainerButton>

        </React.Fragment>

    )
}

Cockpit.propTypes = {
    persons: PropTypes.array
}

export default Cockpit
