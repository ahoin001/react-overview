import React,{useEffect,useRef} from 'react'
import PropTypes from 'prop-types'
import * as Styled from './CockpitStyles'

const Cockpit = props => {

   const toggleRefBttn = useRef(null)
    
    
    // ? Can Handle all update lifecycle methods from Class Components
    // ? Runs when component is created(After Render Cycle, when jsx is rendered) 
    // ? And when dependancy is changed (replaces didMount, didUpdate , willunmount(if ))
    // ? Second argument specifies when it should run
    useEffect(() => {
       
        console.log(`[Cockpit.js] useEffect`)

    //    const timer = setTimeout(() => {
    //         alert('Change made to persons list')
    //     }, 1000);

        toggleRefBttn.current.click()

        // ? This runs when component is unmounted
        return () => {

            // clearTimeout(timer)
            console.log(`[Cockpit.js] cleanup work....  unmounting`)    

        }
        
    }, []
    // [props.persons]
    )

    useEffect(() => {
       
        console.log(`[Cockpit.js] 2nd useEffect`)

       
        return () => {
            console.log(`[Cockpit.js] cleanup workin 2nd effect....  unmounting`)    
        }
        

    }, 
    // [props.persons]
    )
    
    // ? Empty array makes it onnly run the first time component mounts
    // useEffect(() => {
       
    //     console.log(`[Cockpit.js] useEffect`)

    //     setTimeout(() => {
    //         alert('Component mounted')
    //     }, 1000);

    // }, [])

    return (

        <React.Fragment>

            <h1>{props.title}</h1>

            <Styled.ListSubtitle 
            listlength = {props.personsLength}
            > 
            
            This is Built with React 
            
            </Styled.ListSubtitle> 

            <Styled.AppContainerButton
                ref={toggleRefBttn}
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

// ? React stores snapchat of component, and only rerenders when state or props are changed, otherwise it returns the previous render of component
export default React.memo(Cockpit)
