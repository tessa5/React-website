import React from 'react';
import Navbar from './Components/Navbar';
import Homepage from './Components/pages/Homepage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router basename="/React-website">
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Homepage}/>
      </Switch>
      </Router>
  );
}

export default App;
