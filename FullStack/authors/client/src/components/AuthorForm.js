import React, { useEffect, useState} from 'react';
import axios from 'axios';
export default props => {
    const { initialName, onSubmitProp } = props;
    const [name, setName] = useState(initialName);

    const onSubmitHandler = event => {
        event.preventDefault();
        onSubmitProp({name});

        // axios.post('http://localhost:5500/api/author', {
        //     authorName
        // })
        //     .then(res=>console.log(res))
        //     .catch(err=>console.log(err))
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Auther Name:</label><br />
                <input type='text' name='name' value={name} onChange = {(event)=>setName(event.target.value)} />
            </p>
            <input type='submit'/>
        </form>
    )
}