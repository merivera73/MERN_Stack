import React from 'react';
import {Link, navigate, Redirect, Router} from '@reach/router';

import NewCity from './views/NewCity';
import Cities from './views/Cities';
import City from './views/City';
import EditCity from './views/EditCity';
import NotFound from './views/NotFound';

import './App.css';

function App() {
  return (
    <div className="App">
      <Link to='/cities'>Cities</Link>&nbsp;&nbsp; 
      <button onClick={()=> navigate('/cities/new')}>New City</button>
      {/* <Link to='/cities/new'>New City</Link> */}
      <Router>
        <NewCity path='/cities/new'/>
        <City path='/cities/:id'/>
        <EditCity path='/cities/:id/edit' />
        <Cities path='/cities'/>
        <Redirect from='/' to='/cities' noThrow />
        <NotFound default/>
      </Router>
    </div>
  );
}

export default App;
