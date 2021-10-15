import React, {Component, useState} from 'react';

const PersonCard = ({firstName, lastName, age, hairColor}) => {
    const [currentAge, setCurrentAge] = useState(age)
   
    const clickHandler = () => {
        setCurrentAge( currentAge + 1)
    }
   return(
    <div>
        <h1> {lastName}, {firstName} </h1>
        <h3>Age: {currentAge}</h3>
        <h3>Hair Color: {hairColor}</h3>
        <button onClick={clickHandler}>Birthday Button for {firstName} {lastName}</button>
    </div>
    );
}


export default PersonCard;