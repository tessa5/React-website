import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router basename="/React-website">
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Header}/>
      </Switch>
      </Router>
  );
}

export default App;
