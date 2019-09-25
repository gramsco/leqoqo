import React, { useState } from 'react'
import { NavLink, Link, Switch, Route} from 'react-router-dom'
import Users from "./Users"
import Tags from "./Tags"
import Subscriptions from "./Subscriptions"
import NavBar from "./NavBar"
import Categories from "./Categories"

function Admin(props) {

    const [select, setSelect] = useState("subscriptions")

    return (
      <main>
        <select onChange={e => setSelect(e.target.value)} value={select}>
          <option value="users">Users</option>
          <option value="subscriptions">Subscriptions</option>
          <option value="tags">Tags</option>
          <option value="categories">Categories</option>
        </select>
        <hr />

        {select === 'users' && <Users />}
        {select === 'subscriptions' && <Subscriptions />}
        {select === 'tags' && <Tags />}
        {select === 'categories' && <Categories />}
        {/* {NewSubscription} */}
      </main>
    )

}

export default Admin