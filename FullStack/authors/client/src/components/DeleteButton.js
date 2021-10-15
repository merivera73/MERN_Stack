import React from 'react';
import axios from 'axios';
export default props => {
    const {authorId, successCallback} = props;
    const deleteAuthor = event => {
        axios.delete('http://localhost:5500/api/author/' + authorId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button onClick={deleteAuthor}>
            Delete
        </button>
    )
}