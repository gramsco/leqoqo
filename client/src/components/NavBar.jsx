import React, {useState} from 'react'
import { Link } from "react-router-dom"

function NavBar() {


    const [emoji,setEmoji] = useState("😴")

    function changeAvailable() {
        if (emoji === "😀") setEmoji("😴")
        else setEmoji("😀")
    }

    return (
      <nav className="Navbar">
        <a href="/">
          <i class="fas fa-home"></i>
        </a>
        <div className="Navbar__emoji" onClick={changeAvailable}>
          {emoji}
        </div>
        {/* <a href="/Signup">
          <i class="fas fa-key"></i>
        </a> */}
        <div>
          <i class="fas fa-user-cog"></i>
        </div>
      </nav>
    )
}
export default NavBar
