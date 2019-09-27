import React, {useState} from 'react'
import NavBar from "./NavBar"
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'
import Map from './Map'
import api from '../api'
import Header from "./Header"
import Container from './Container'

mapboxgl.accessToken = 'pk.eyJ1IjoiZ3JhbXNjbyIsImEiOiJjazB3ZG5oaXQwMjNrM2NtbTh1bWh0NWtzIn0.5zWaES3a2JH0EZbd7t8aMA'



function Home() {

    const [connected, setConnected] = useState(false)
    const [users, setUsers] = useState([])
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("events")
    
    console.log(events)

    
    function fetchEvents() {
        api
        .getEvents()
        .then(res => setEvents(res))
        .catch(err => console.log(err))
    }

    function fetchUsers() {
        api
            .getUsers()
            .then(res => setUsers(res))
            .catch(err => console.log(err))
    }
    
    //connected is to be changed with api.isLoggedIn() 

    return (
      <div className="Home">
        <Header
          setSearch={setSearch}
          setUsers={setUsers}
        setEvents={setEvents}
        search={search}
            
        />

        {!connected && <Map />}
        {connected && (
          <Container
            search={search}
            fetchUsers={fetchUsers}
            fetchEvents={fetchEvents}
                    events={events}
                    users={users}
          />
        )}

        {connected && <NavBar />}
      </div>
    )

}
export default Home;