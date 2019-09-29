import React, {useState} from 'react'
import { Link, NavLink } from "react-router-dom"
import { HashLink} from 'react-router-hash-link';

import api from "../api"
function NavBar({ props }) {

    console.log(props)
    const [emoji,setEmoji] = useState("😴")

    function changeAvailable() {
        if (emoji === "😀") setEmoji("😴")
        else setEmoji("😀")
    }
  
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
        {props.location.pathname === "/home" ?
          <HashLink to="#top_page">  <i class="fas fa-home"></i></HashLink>
          :
          <NavLink activeClassName="selected" to="/home"><i class="fas fa-home"></i></NavLink>
        }
        <div className="Navbar__emoji" onClick={changeAvailable}>
          {emoji}
          {JSON.parse(localStorage.user).username}
        </div>
        {/* <a href="/Signup">
          <i class="fas fa-key"></i>
        </a> */}
        <NavLink
          activeClassName="selected"
          to="/profile-settings">
          <i class="fas fa-user-cog"></i>
        </NavLink>
        <div onClick={handleLogout}>
          <i class="fas fa-door-open"></i>
        </div>
      </nav>
    )
}
export default NavBar
