import React, { useState } from 'react'
import { NavLink, Link, Switch, Route} from 'react-router-dom'
import Users from "./Users"
import Tags from "./Tags"
import Subscriptions from "./Subscriptions"
import NavBar from "./NavBar"

function Admin(props) {

    const [select, setSelect] = useState("subscriptions")

    return (
        <main>
            <select onChange={(e) => setSelect(e.target.value)} value={select}>
                <option value="users">Users</option>
                <option value="subscriptions">Subscriptions</option>
                <option value="tags">Tags</option>
            </select>
            <hr />
            
            {select === "users" && <Users />}
            {select === "subscriptions" && <Subscriptions />}
            {select === "tags" && <Tags />}

        </main>
    )

}

export default Admin