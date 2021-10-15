import React, { useState } from 'react';
import axios from 'axios';

const CityForm = ({ initialValues, submitHandler }) => {
    const [formState, setFormStatet] = useState (initialValues);

    function onChangeHandler(event) {
        const {name, value} = event.target;

        setFormStatet({
            ...formState,
            [name]: value
        })
    }

    return (
        <form onSubmit={event => handleSubmit(event, formState)}>
            <div>
            <label>Name:</label>
            <input 
                name='name'
                value={formState.name}
                onChange={onChangeHandler}
            />
            </div>
            <div>
            <label>Population:</label>
            <input 
                name='population'
                value={formState.population}
                onChange={onChangeHandler}
            />
            </div>
            <div>
            <label>Image:</label>
            <input 
                name='imageURL'
                value={formState.imageURL}
                onChange={onChangeHandler}
            />
            </div>
            <button>Submit</button>
        </form>
    )
}

export default CityForm;