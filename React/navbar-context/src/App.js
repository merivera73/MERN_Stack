import React, { Component, useContext } from 'react';
import logo from './logo.svg';
import './App.css';

import AppWrapperComponent from './components/AppWrapperComponent';
import MyContext from './components/MyContext';
import NameForm from './components/NameForm';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <MyContext.Provider value={"context value"}>
        <AppWrapperComponent>
          <NavBar/>
          <NameForm/>
        </AppWrapperComponent>
      </MyContext.Provider>
    </div>
  );
}

export default App;
