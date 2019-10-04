import React,{useState,useEffect} from 'react'
import Header from './Header'
import NavBar from './NavBar'
import api from '../api'


function FavsList(props) {

  const [profile, setProfile] = useState({})
  const [favs, setFavs] = useState([])
  
  console.log("--favs--")
  console.log(favs)
  console.log("--favs--")

  useEffect(() => {

    api
    .getUserProfileWithUser(JSON.parse(localStorage.user)._id)
    .then(res => setProfile(res))
    .catch(err => console.log(err))

  }, [])
  
  useEffect(() => {

    api
      .getUserEvents(profile._id)
      .then(res => {
        console.log(res)
        setFavs(res)
      })
      .catch(err => console.log(err))
  }, [profile])
   
  
  return (
    <>
      <Header props={props} />
      <div className="FavsList">
        <h2>
          Here the events you wanna go to,{' '}
          <span style={{ color: 'red' }}>{profile.username} </span>!
        </h2>
        <div class="FavsList__events">
          <h3>Events</h3>
          {favs.map((e, i) => (
            <div className="FavsList__event" key={i}><a href={`/event-details/${e._id}`}>{e.name}</a></div>
          ))}
        </div>

        <div style={{ display: 'none' }} class="FavsList__users">
          <h3>Users</h3>
        </div>
      </div>
      <NavBar props={props} />
    </>
  )

}

export default FavsList