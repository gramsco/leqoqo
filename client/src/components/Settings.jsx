import React, {useState,useEffect} from 'react'
import NavBar from './NavBar'
import api from '../api'
import { userInfo } from 'os'

function Settings(props ) {
  
  let users_infos = JSON.parse(localStorage.user)
  const [userProfile, setUserProfile] = useState({})
  
  const [evts, setEvts] = useState([])

  

  console.log(JSON.parse(localStorage.user))
  
  function fetchUserProfile() {
    
    api
    .getUserProfile(users_infos._id)
      .then(res => {
      console.log(res._id)
      setUserProfile(res)
      fetchUserEvents(res._id)
    })
    .catch(err => console.log(err))
    
  }
  
  function fetchUserEvents(id) {
      
    api
    .getUserEvents(id)
    .then(res => setEvts(res))
    .catch(err => console.log(err))
    
  }
  
  useEffect(fetchUserEvents,[])
  useEffect(fetchUserProfile, [])
  
  return (
    <>

      {!api.isLoggedIn ? (
        <div>
          <span role="img" aria-label="Panda">
            🐼
          </span>
          YOU SHOULD NOT BE HERE{' '}
          <span role="img" aria-label="Panda">
            🐼
          </span>
        </div>
      ) : (
        <div>
          <h1>{`Hello, ${userProfile.username || 'you'} ${
            userProfile.emoji
          }`}</h1>
            <div>You want to go to these events : </div>
            {evts.map((e, i) => (
              
              <div>{e.name} @ {e.place.name}</div>

            ))}
          {/* {userProfile && user.favs} */}
        </div>
      )}

      <NavBar props={props}/>
    </>
  )

}

export default Settings