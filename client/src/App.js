import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Admin from './components/Admin/Admin'
import NewSubscription from './components/Admin/NewSubscription'
import NewEvent from './components/Admin/NewEvent'
import Details from "./components/Admin/Details"
import ListMessages from "./components/Messages/ListMessages"
import UserProfile from "./components/UserProfile"
import UserDetail from './components/UserDetail'
import Auth from './components/Auth'
import NavBar from './components/NavBar'
import Header from './components/Header'
import EventDetail from './components/EventDetail';
import Infos from './components/Infos'
import Favs from './components/Favs'
import api from './api'

require ('dotenv').config()

function App(props) {

  const [userProfile, setUserProfile] = useState({})

  
  function fetchUserProfile() {
    console.log("fetching user profile")
    api
      .getUserProfileWithUser(JSON.parse(localStorage.user)._id)
      .then(res => {
        console.log("--------")
        setUserProfile(res)
        if (res.connected) console.log(res.connected)
        console.log("--------")
      })
      .catch(err => console.log(err))
  }  
  

  return (
    <div
      className="App"
      props={props}
      fetchUserProfile={fetchUserProfile}
    >
      {/* <Header /> */}
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
        <Route exact path="/profile/:id" component={UserDetail} />
        <Route exact path="/event-details/:id" component={EventDetail} />
        
        <Route path="/profile-settings" component={UserDetail} />
        <Route path="/messages/:id" component={ListMessages} />
        <Route exact path="/infos" component={Infos} />
        <Route exact path="/favs" component={Favs} />
        {/* (- PAGES TO COMMENT ONCE DEPLOYED */}
        <Route exact path="/secret-admin-page" component={Admin} />
        <Route exact path="/secret-admin-page/details" component={Details} />
        <Route path="/add-subscription/:id" component={NewSubscription} />
        <Route path="/add-event/:id" component={NewEvent} />
        {/* PAGES TO COMMENT OUT -) */}

        {/* Default */}
        <Route render={() => <h1>404, sorry little qoqo</h1>} />
      </Switch>

      {/* {api.isLoggedIn() && <NavBar />} */}

    </div>
  );
}

export default App;
