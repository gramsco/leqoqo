import React, { useState, useEffect} from 'react'
import Users from "./Users"
import Subscriptions from "./Subscriptions"
import Categories from "./Categories"
import Places from './Places'
import api from '../../api'
import NewEvent from './NewEvent'
import Events from './Events'
// import Map from './Map'
import './Admin.css'
function Admin() {




    const [select, setSelect] = useState("users")
    const [cats, setCategories] = useState([])
    const [users, setUsers] = useState([])
    const [subs, setSubs] = useState([])
    const [event,setEvent] = useState("")
    
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
          <option key={1} value="users">Users</option>
          <option key={2} value="subscriptions">Subscriptions</option>
          <option key={3} value="categories">Categories</option>
          <option key={4} value="places">Places</option>
          <option key={5} value="events">Events</option>
        </select>
        <hr />

        {select === 'users' && <Users fetchUsers={fetchUsers} users={users}/>}
        {select === 'subscriptions' && <Subscriptions fetchSubscriptions={fetchSubscriptions} subs={subs} cats={cats} />}
        {select === 'categories' && <Categories cats={cats} fetchCategories={fetchCategories}/>}
        {select === 'places' && <Places setSelect={setSelect} setEvent={setEvent}/>}
        {select === 'newEvent' && <NewEvent setSelect={setSelect} cats={cats} event={event} />}
        {select === 'events' && <Events />}
        {/* <Map /> */}
        {/* {NewSubscription} */}
      </main>
    )

}

export default Admin