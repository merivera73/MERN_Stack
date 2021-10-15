import React, { useState, useContext } from 'react';
import MyContext from './MyContext';
const NameForm = props => {
    const nameF = useContext(MyContext);
    // const [formState, setFormState] = useState ({
    //     name:"",
    //     submitted: false
    // })

    // const onChangeHandler = event => {
    //     event.preventDefault();
    //     console.log(formState);
    //     setFormState({
    //         ...formState,
    //         [event.target.name]: event.target.value
            
    //     })
    // }

    // const onSubmitHandler = event => {
    //     event.preventDefault();
    //     console.log(formState);
    //     formState.name.length < 2 ?
    //     setFormState({
    //         ...formState,
    //         submitted: false
    //     }) : setFormState({
    //         ...formState,
    //         submitted: true
    //     })
    // }

    let message = '';
    if(nameF.formState.length < 2){
        message = 'Your Name must be at least 2 characters!'
    }

    return(
        <div>
            <form>
                <label>Name</label>
                <input value={nameF.formState} type="text" name="name" onChange={(event)=> nameF.setFormState(event.target.value)}/>
                {/* <p>{message}</p> */}    
            </form> 
           
        </div>
    );
}

export default NameForm