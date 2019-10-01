import React, {useState,useEffect} from 'react'
import NavBar from './NavBar'
import Header from './Header'
import api from '../api'
import { userInfo } from 'os'

function UserDetail(props) {
  
  let users_infos = JSON.parse(localStorage.user)
  const [userProfile, setUserProfile] = useState({})
  
  const [evts, setEvts] = useState([])

  console.log(props)

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
      <Header props={props} />
      <div className="UserDetail">
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
          
            <div className="UserDetail__Main">
              <div className="top">
                
                <div className="side">
                  <div className="small_Circle"></div>
                  <div className="small_Circle"></div>
                </div>

                <div className="center">
                  <div className="bigEmoji">{userProfile.emoji}</div>
                  <div>{`${userProfile.username || "anonymous"}`}</div>
                </div>

                <div className="side">
                  <div></div>
                  <div></div>
                </div>
              </div>

              <div className="middle">

                <div className="middle__bio">
                <h3>Bio</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, praesentium. Praesentium voluptatem provident perspiciatis dignissimos, illum autem assumenda nihil consequuntur rerum, at sed tempore aspernatur consequatur? Ducimus nostrum maxime nobis?</p>
                </div>

                <div className="middle__questions">
                  <p>Si j'étais blablabla, je serais blablabla</p>
                  <p>Si j'étais blablabla, je serais blablabla</p>
                  <p>Si j'étais blablabla, je serais blablabla</p>
                </div>

              </div>
            </div>
            
          )}
      </div>
            
      <NavBar props={props}/>
    </>
  )

}

export default UserDetail