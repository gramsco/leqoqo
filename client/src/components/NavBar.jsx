import React, {useState,useEffect} from 'react'
import { Link, NavLink } from "react-router-dom"
import { HashLink} from 'react-router-hash-link';
import api from "../api"



function NavBar(props) {

  console.log(localStorage)
  const users_infos = JSON.parse(localStorage.user)
  

  const [userProfile, setUserProfile] = useState({})
  
  useEffect(() => {
      api
        .getUserProfileWithUser(users_infos._id)
        .then(res => {
          
          console.log('------')
          console.log(res._id)
          console.log("------")

          api
            .connect(res._id)
            .then(() => setUserProfile(res))
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    },[])
  
    return (
      <nav className="Navbar">
        <NavLink activeClassName="selected" to={`/profile/${userProfile._id}`}>
          <div className="Navbar__emoji">{userProfile.emoji}</div>
          <p>Profile</p>
        </NavLink>

        <NavLink activeClassName="selected" to="/favs">
          <i class="fas fa-heart"></i>
          <p>Favs</p>
        </NavLink>

        <NavLink activeClassName="selected" to="/home">
          <i class="fas fa-home"></i>
          <p>Home</p>
        </NavLink>

        <NavLink activeClassName="selected" to="/messages/all">
          <i class="far fa-comment-dots"></i>
        </NavLink>

        <NavLink activeClassName="selected" to="/infos">
          <i class="fas fa-info-circle"></i>
        </NavLink>
      </nav>
    )
}
export default NavBar
