import React, { useState, useEffect} from 'react'
import Users from "./Users"
import Subscriptions from "./Subscriptions"
import Categories from "./Categories"
import api from '../../api'

function Admin() {

    const [select, setSelect] = useState("subscriptions")
    const [cats, setCategories] = useState([])
    const [users, setUsers] = useState([])
    const [subs, setSubs] = useState([])

  function fetchSubscriptions() {
    console.log("fetchin' subscriptions")

    api
      .getSubscriptions()
      .then(response => {
        console.log(response)
        setSubs(response)
      })
      .catch(err => console.log(err))

  }

  console.log(users)
  function fetchUsers() {
      api
        .getUsers()
        .then(response => {
          console.log(response)
          setUsers(response)
        })
        .catch(err => console.log(err))
    }
  
    function fetchCategories() {
      console.log('fetchin')
      api
        .getCategories()
        .then(resp => setCategories(resp))
        .catch(err => console.log(err))
    }
  
  useEffect(fetchCategories, [])
  useEffect(fetchSubscriptions, [])
  
    return (
      <main>
        <select onChange={e => setSelect(e.target.value)} value={select}>
          <option value="users">Users</option>
          <option value="subscriptions">Subscriptions</option>
          <option value="categories">Categories</option>
        </select>
        <hr />

        {select === 'users' && <Users fetchUsers={fetchUsers} users={users}/>}
        {select === 'subscriptions' && <Subscriptions fetchSubscriptions={fetchSubscriptions} subs={subs} cats={cats} />}
        {select === 'categories' && <Categories cats={cats} fetchCategories={fetchCategories}/>}

        {/* {NewSubscription} */}
      </main>
    )

}

export default Admin