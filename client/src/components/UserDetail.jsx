import React, {useState,useEffect} from 'react'
import NavBar from './NavBar'
import Header from './Header'
import api from '../api'
import { userInfo } from 'os'
import UserProfile from './UserProfile'
import Messages from './Messages/Messages'

function UserDetail(props) {
  
  let users_infos = JSON.parse(localStorage.user)
  const [userProfile, setUserProfile] = useState({})
  const id = props.match.params.id
  const [userVisited, setUserVisited] = useState({})
  
  useEffect(() => {

    api
      .getUserProfile(id)
      .then(res => setUserVisited(res))
      .catch(err => console.log(err))
  },[])

  console.log(userVisited._id)
  console.log(userProfile)
  console.log(userVisited._id === userProfile._id)

  const [evts, setEvts] = useState([])

  const [msg,setMsg] = useState(false)

  function handleLogout() {
    api
      .logout()
      .then(result => {
        props.history.push('/') // Redirect to the home page
      })
      .catch(err => {
        return 'cannot logout'
      })
  }

  function fetchUserProfile() {
    
    // get the visitor profile id
    api
    .getUserProfile(users_infos._id)
      .then(res => {
        if (id === res._id) {
        console.log("params id is visitor id")
        setUserVisited(res)
        }
        else {
          console.log('params id is different than visitor id')
          fetchUserVisited()
        }
      setUserProfile(res)
      fetchUserEvents(res._id)
    })
    .catch(err => console.log(err))
    
  }

  function fetchUserVisited() {
    console.log("--------YOLOOOOO-------")
    console.log("--------YOLOOOOO-------")
    console.log("--------YOLOOOOO-------")
    console.log("--------YOLOOOOO-------")
    console.log("--------YOLOOOOO-------")
    console.log("--------YOLOOOOO-------")
    console.log("--------YOLOOOOO-------")
    console.log()
    api
      .getUserProfile(id)
      .then(res => {
        console.log("new thing ::::::")
        console.log(res)
        setUserVisited(res)
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
      <Header props={props} userProfile={userProfile} />
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
            
          
          !msg && <div className="UserDetail__Main">
            <div className="top">
              <div className="side">
                <div onClick={handleLogout}>
                  <i class="fas fa-power-off logout-icon"></i>
                  </div>
                  
                  <div onClick={() => setMsg(true)}>
                    <i class="fas fa-envelope"></i>
                  </div>
                  
                </div>
                
              <div className="center">
                <div className="bigEmoji">{userVisited.emoji}</div>
                <div>{`${userVisited.username}`}</div>
              </div>

              <div className="side">
                <div></div>
                <div></div>
              </div>
            </div>

            <div className="middle">
              <div className="middle__bio">
                <h3>{userVisited.bio && ""}</h3>
                <p>{userVisited.bio || ''}</p>
              </div>

              <div className="middle__questions">
                <p>{userVisited.question || ''}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      {msg && <Messages />}
      {!msg && <NavBar props={props} />}
    </>
  )

}

export default UserDetail