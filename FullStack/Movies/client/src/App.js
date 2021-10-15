import React from 'react';
import {Link, navigate, Redirect, Router} from '@reach/router';

import NotFound from './views/NotFound';
import Movies from './views/Movies';
import NewMovie from './views/NewMovie';
import Movie from './views/Movie';
import Review from './views/Review';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Squishy Tomatoes</h1>
      <Router>
        <Movies path='/movies'/>
        <NewMovie path='/movies/new'/>
        <Movie path='/movies/:id'/>
        <Review path='/movies/:id/review'/>
        <Redirect from='/' to='/movies' noThrow/>
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
