import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Admin from './components/Admin/Admin'
import NewSubscription from './components/Admin/NewSubscription'
import NewEvent from './components/Admin/NewEvent'
import Details from "./components/Admin/Details"
import Messages from "./components/Messages/Messages"
import UserProfile from "./components/UserProfile"
import Settings from './components/Settings'
import Auth from './components/Auth'
import NavBar from './components/NavBar'
import Header from './components/Header'
import EventDetail from './components/EventDetail';
require ('dotenv').config()

function App() {
  console.log(process.env.REACT_APP_TEST)
  function handleScroll(e) {
    console.log("lalalala")
  }
  return (
    <div
      className="App"
      onScroll={handleScroll}
    >
      <Switch>

        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home} />
        {/* <Route exact path="/Signup" component={Signup} /> */}


        <Route exact path="/Signup" render={routeProps => (
          <Auth isLogin={false} {...routeProps} />
        )} />


        <Route exact path="/login" render={routeProps => (
          <Auth isLogin={true} {...routeProps} />
        )} />

        <Route exact path="/UserProfile" component={UserProfile} />
        <Route exact path="/event-details/:id" component={EventDetail} />

        <Route path="/profile-settings" component={Settings} />


        {/* (- PAGES TO COMMENT ONCE DEPLOYED */}
        <Route exact path="/secret-admin-page" component={Admin} />
        <Route exact path="/secret-admin-page/details" component={Details} />
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
