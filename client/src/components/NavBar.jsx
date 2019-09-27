import React, {useState} from 'react'
import { Link } from "react-router-dom"
import api from "../api"
function NavBar({ props }) {

    const [emoji,setEmoji] = useState("😴")

    function changeAvailable() {
        if (emoji === "😀") setEmoji("😴")
        else setEmoji("😀")
    }
  
  function handleLogout() {
      api
        .logout()
        .then(result => {
         
          props.history.push('/') // Redirect to the home page
        })
        .catch(err => {
          return 'cannot logout'
        })
    }

    return (
      <nav className="Navbar">
        <a href="/">
          <i class="fas fa-home"></i>
        </a>
        <div className="Navbar__emoji" onClick={changeAvailable}>
          {emoji}
          {JSON.parse(localStorage.user).username}
        
        </div>
        {/* <a href="/Signup">
          <i class="fas fa-key"></i>
        </a> */}
        <a href="/profile-settings">
          <i class="fas fa-user-cog"></i>
        </a>
        <div onClick={handleLogout}>
          <i class="fas fa-door-open"></i>
        </div>
      </nav>
    )
}
export default NavBar
