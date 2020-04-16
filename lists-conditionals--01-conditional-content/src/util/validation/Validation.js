import React from 'react'

export const Validation = (props) => {

    let validationMessage;

    if (!props.textLength) {
        
        validationMessage = 'Please Enter Text'

    } else if (props.textLength > 4){
 

        validationMessage = 'Text long enough'
  
    } else {
        validationMessage = "Text too short"
    }

    return <div>

        <p>{validationMessage}</p>

    </div>


}
