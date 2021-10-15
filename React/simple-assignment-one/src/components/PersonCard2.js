import React, {Component} from 'react';

const PersonCard = ({firstName, lastName, age, hairColor}) => {
   return(
    <div>
        <h1> {lastName}, {firstName} </h1>
        <h3>Age: {age}</h3>
        <h3>Hair Color: {hairColor}</h3>
    </div>
    );
}


export default PersonCard;