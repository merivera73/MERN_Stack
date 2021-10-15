import React, { useState } from 'react';
const RegisterForm = props => {
    const [ formState, setFormState ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        submitted: false
    })
    const onChangeHandler = event => {
        event.preventDefault();
        console.log(formState);
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
            
        })
    }
    const onSubmitHandler = event => {
        event.preventDefault();
        console.log(formState);
        formState.firstName.length < 2 || formState.lastName.length < 2 || formState.email.length < 2 || formState.password < 8 || formState.confirmPassword < 8 || formState.password !== formState.confirmPassword ? 
        setFormState({
            ...formState,
            submitted: false
        }) : setFormState({
            ...formState,
            submitted: true
        })
    }
    let message = '';
    if(formState.firstName.length < 2){
        message = 'Your First Name must be at least 2 characters!'
    }

    let message2 = '';
    if(formState.lastName.length < 2){
        message2 = 'Your Last Name must be at least 2 characters!'
    }

    let message3 = '';
    if(formState.email.length < 5){
        message3 = 'Your Last Email must be at least 5 characters!'
    }

    let message4 = '';
    if(formState.password.length < 8){
        message4 = 'Must be at least 8 characters long.'
    }

    let message5 = '';
    if(formState.confirmPassword.length < 8){
        message5 = 'Must be at least 8 characters long.'
    }

    let message6 = '';
    if(formState.password !== formState.confirmPassword){
        message6 = 'Your Passwords do not match.'
    }
    return(
        <div>
            {formState.submitted ? <h1>You have Submitted this Form!!!!!</h1> : <h1>You haven't Submitted your Form yet!!!!!</h1>}
            <form onSubmit={onSubmitHandler}>
                <label>First Name</label>
                <input type="text" name="firstName" onChange={onChangeHandler}/>
                <p>{message}</p>
                <br/>        
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={onChangeHandler}/>
                <p>{message2}</p>
                <br/>        
                <label>Email</label>
                <input type="email" name="email" onChange={onChangeHandler}/>
                <p>{message3}</p>
                <br/>        
                <label>Password</label>
                <input type="password" name="password" onChange={onChangeHandler}/>
                <p>{message4}</p>
                <p>{message6}</p>
                <br/>        
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={onChangeHandler}/>
                <p>{message5}</p>
                <p>{message6}</p>
                <br/>   
                <input type="submit"/>     
            </form>
           <p>First Name: {formState.firstName}</p> 
           <p>Last Name: {formState.lastName}</p>
           <p>Email: {formState.email}</p>
           <p>Password: {formState.password}</p>
           <p>Confirm Password: {formState.confirmPassword}</p>
        </div>
    );
    
}

export default RegisterForm;