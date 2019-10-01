import React, {useState} from 'react'
import { Link, NavLink } from "react-router-dom"
import { HashLink} from 'react-router-hash-link';

import api from "../api"
function NavBar({ props }) {

  function handleLogout() {
      api
        .logout()
        .then(result => {
         
          props.history.push('/signup') // Redirect to the home page
        })
        .catch(err => {
          return 'cannot logout'
        })
    }

    return (
      <nav className="Navbar">
        
        <NavLink
          activeClassName="selected"
          to="/profile-settings">
          
          <div className="Navbar__emoji" >👁</div>
          <p>Profile</p>
        </NavLink>


        <NavLink activeClassName="selected" to="/home">
          <i class="fas fa-home"></i>
          <p>Home</p>
        </NavLink>


        <div className="goToFavs">
          <i class="fas fa-heart"></i>
        </div>
        
  
      </nav>
    )
}
export default NavBar
