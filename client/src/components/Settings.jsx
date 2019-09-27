import React, {useState,useEffect} from 'react'
import NavBar from './NavBar'
import api from '../api'

function Settings() {
  
  let users_infos = JSON.parse(localStorage.user)
  let [user, setUser] = useState({})
  
  useEffect(() => {

    // we need to change that to userProfile to get the actual infos... 
    api
      .getSingleUser(users_infos._id)
      .then((res) => setUser(res))
      .catch(err => console.log(err))
    }, [])
  
  return (
    <>
      {!api.isLoggedIn ? (
        <div>you should not be here</div>
      ) : (
          <div>
            <h1>{`Hello ${users_infos.username} !`}</h1>
            <div>you're connected but can't change anything, SO SORRY</div>
            {user && user.favs}
            
          
        </div>
      )}

      <NavBar />
    </>
  )

}

export default Settings