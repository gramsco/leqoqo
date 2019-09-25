import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Admin from './components/Admin/Admin'
import NewSubscription from './components/Admin/NewSubscription'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/secret-admin-page" component={Admin} />
        <Route render={() => <h1>404</h1>} />
      </Switch>
      
    </div>
  );
}

export default App;
