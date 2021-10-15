import React, {useEffect, useState } from 'react';
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';
import axios from 'axios';

export default () => {
    // const [message, setMessage] = useState("Loading...")
    // useEffect(()=> {
    //     axios.get("http://localhost:5000/api")
    //         .then(res=>setMessage(res.data.message))
    // }, []);
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:5000/api/people/all')
            .then(res=>setPeople(res.data))
            .catch(err=>console.log("Error: ", err))
    }, [])
    return(
        <div>
            <PersonForm/>
            <hr/>
            <PersonList people={people}/>
        </div>
    )
}