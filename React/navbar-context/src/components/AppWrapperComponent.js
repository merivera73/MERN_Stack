import React, { useState } from 'react';
import MyContext from './MyContext';
const ChildComponent = (props) =>{
    const [formState, setFormState] = useState('John Doe');
    return(
      <MyContext.Provider value={ {formState, setFormState} }>
        {props.children}

      </MyContext.Provider>
    )
}
export default ChildComponent;