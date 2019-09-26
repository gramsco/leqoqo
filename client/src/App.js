import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Admin from './components/Admin/Admin'
import NewSubscription from './components/Admin/NewSubscription'
import NewEvent from './components/Admin/NewEvent'
import Signup from "./components/Signup"
import Details from "./components/Admin/Details"
import Messages from "./components/Messages/Messages"
// import UserProfile from "./components/UserProfile"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Signup" component={Signup} />



        {/* (- PAGES TO COMMENT ONCE DEPLOYED */}
        <Route exact path="/secret-admin-page" component={Admin} />
        <Route exact path="/secret-admin-page/details" component={Details}/>
        <Route exact path="/secret-messages-page/" component={Messages} />
        <Route path="/add-subscription/:id" component={NewSubscription} />
        <Route path="/add-event/:id" component={NewEvent} />
        {/* PAGES TO COMMENT OUT -) */}

        {/* Default */}
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </div>
  );
}

export default App;
