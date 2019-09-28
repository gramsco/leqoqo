import React, {useState,useEffect} from 'react'
import NavBar from './NavBar'
import api from '../api'
import { userInfo } from 'os'

function Settings() {
  
  let users_infos = JSON.parse(localStorage.user)
  let [userProfile, setUserProfile] = useState({})
  
  console.log(userProfile)
  console.log(users_infos)

  useEffect(() => {

    // we need to change that to userProfile to get the actual infos... 
    api
      .getUserProfile(users_infos._id)
      .then((res) => setUserProfile(res))
      .catch(err => console.log(err))
    }, [])
  
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
          <h1>{`Hello ${users_infos.username} + ${userProfile.emoji}`}</h1>
          <div>you're connected but can't change anything, SO SORRY</div>
          {/* {userProfile && user.favs} */}
        </div>
      )}

      <NavBar />
    </>
  )

}

export default Settings