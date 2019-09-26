import React from 'react'
import { Link } from "react-router-dom"

function NavBar() {

    return (
        <nav>
            <a href="/tags">Tags</a>
            <a href="/users">Users</a>
            <a href="/subscriptions">Subscriptions</a>
            <Link to="/Signup">Signup</Link>
            <Link to="/login">Login</Link>
        </nav>
    )
}
export default NavBar
