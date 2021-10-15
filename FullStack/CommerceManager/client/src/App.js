import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import Details from './views/Details';
import './App.css';

import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <Main />
      
    </div>
  );
}

export default App;
