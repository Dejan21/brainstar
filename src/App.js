import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SingleCard from './components/SingleCard';
import React from 'react';



// import React, { PureComponent } from 'react'

function App (){

  return (
    
    <div className="App">
      <Router>
        
      <Navbar />
      <Switch>
       <Route exact path='/' component={HomePage} />
{/* <SingleCard /> */}
      </Switch>
     </Router>
</div>
  );

}

export default App;
