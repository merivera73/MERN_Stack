import React, { useContext } from 'react';
import MyContext from './MyContext';
import NameForm from './NameForm';
const NavBar = props => {
const name = useContext(MyContext)
    return (
        <div className='Nav'>
            <p>Hello {name.formState} !!!! </p>
        </div>
    );
}


export default NavBar;