import React from 'react';
import { Link, navigate, Redirect, Router } from '@reach/router';



import './App.css';
import PageNotFound from './views/PageNotFound';
import Restaurants from './views/Restaurants';
import EditRestaurant from './views/EditRestaurant';
import NewRestaurant from './views/NewRestaurant';
import Restaurant from './views/Restaurant';
import Review from './views/Review';

function App() {
  return (
    <div className="App">
      <Router>
        <Restaurants path='/restaurants'/>
        <EditRestaurant path='/restaurants/:id/edit'/>
        <NewRestaurant path='/restaurants/new'/>
        <Restaurant path='/restaurants/:id'/>
        <Review path='/restaurants/:id/newReview'/>
        <Redirect from='/' to='/restaurants' noThrow/>
        <PageNotFound default/>
      </Router>
    </div>
  );
}

export default App;
