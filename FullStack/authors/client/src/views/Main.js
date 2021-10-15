import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';
import {Router} from '@reach/router';

export default () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:5500/api')
            .then(res =>{
                setAuthors(res.data)
                setLoaded(true);
            });
    }, [])
    const removeFromDom = autherId => {
        setAuthors(authors.filter(author => author._id !== autherId))
    }

    const createAuthor = author => {
        axios.post('http://localhost:5500/api/newAuthors', author)
            .then(res=>{
                setAuthors([...authors, res.data]);
            })
    }

    return (
        // <Router>

        // </Router>

        <div>
            <AuthorForm onSubmitProp={createAuthor} initialAuthorName='' />
            <hr/>
            {loaded && <AuthorList authors ={authors} removeFromDom={removeFromDom}/>}
        </div>
    )
}