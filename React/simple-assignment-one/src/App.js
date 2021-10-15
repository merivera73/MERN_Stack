import React from 'react';
import logo from './logo.svg';
import './App.css';

import HelloWorld from './components/HelloWorld';
import PersonCard from './components/PersonCard';
import RegisterForm from './components/RegisterForm';
import PokemonAPI from './components/PokemonAPI';
import PokemonAxios from './components/PokemonAxios';

import homepage from './views/homepage';

import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Router>
          <homepage path='Home'/>
        
        </Router>
        <PokemonAPI path='pokemon'/>        
        <PokemonAxios/>
        <HelloWorld someText={"Hello World I got this"}/>
        <HelloWorld someText={"I'm reusing Hello World Component!!!!"}/>
        <PersonCard firstName={"Mike"} lastName={"Jones"} age={23} hairColor="Brown"/>
        <PersonCard firstName="Jane" lastName="Doe" age={45} hairColor="Black"/>
        <PersonCard firstName="John" lastName="Smith" age={88} hairColor="Brown"/>
        <PersonCard firstName="MIllard" lastName="Fillmore" age={50} hairColor="Brown"/>
        <PersonCard firstName="Maria" lastName="Smith" age={62} hairColor="Brown"/>
        <RegisterForm/>
      </header>
    </div>
  );
}

export default App;
