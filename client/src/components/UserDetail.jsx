import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import Header from './Header'
import api from '../api'
import { Link } from 'react-router-dom'
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

  }, [id])


  const [evts, setEvts] = useState([])

  const [msg, setMsg] = useState(false)

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
      .getUserProfileWithUser(users_infos._id)
      .then(res => {
        if (id === res._id) {
          setUserVisited(res)
        }
        else {
          fetchUserVisited()
        }
        setUserProfile(res)
        fetchUserEvents(res._id)
      })
      .catch(err => console.log(err))

  }

  function fetchUserVisited() {
    api
      .getUserProfile(id)
      .then(res => {
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

  function handleMsg() {
    // create in both userprofiles the id of the other
    let body = { first_id: userVisited._id, second_id: userProfile._id }
    api
      .createRoom(body)
      .then(res => setMsg(true))
      .catch(err => console.log(err))
  }

  useEffect(fetchUserEvents, [])
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
          !msg && (
            <div className="UserDetail__Main">
              <div className="top">
                <div className="side">
                  <div style={{ visibility: 'hidden' }} onClick={handleLogout}>
                    <i class="fas fa-power-off logout-icon"></i>
                  </div>
                </div>

                <div className="center">
                  <div className="bigEmoji">{userVisited.emoji}</div>
                  {userVisited._id === userProfile._id ? (
                    <div>
                      <i class="fas fa-exchange-alt">
                        <a href="/UserProfile">edit profile</a>
                      </i>
                    </div>
                  ) : (
                    <Link to={`/messages/${userVisited._id}`}>
                      <i class="fas fa-envelope"></i>
                    </Link>
                    // <div onClick={() => handleMsg(true)}>
                    //   <i class="fas fa-envelope"></i>
                    // </div>
                  )}
                  <div className="userVisitedName">{`${userVisited.username}`}</div>
                </div>

                <div className="side">
                  <div></div>
                  <div></div>
                </div>
              </div>

              <div className="middle">
                <h3 className="bio">BIO</h3>
                <div className="middle__bio">
                  <h3>{userVisited.bio && ''}</h3>
                  <p>{userVisited.bio || ''}</p>
                </div>
                
                  <div className="middle__questions">
                    {userVisited.question_answer &&
                      <p>
                        If I was.. {userVisited.question_type}.. I would be :{' '}
                        {userVisited.question_answer}
                      </p>
                    }

                  {!userVisited.weekends &&
                  !userVisited.weekday &&
                  !userVisited.weekends ? (
                    <span className="availability"></span>
                  ) : (
                    <>
                      <span className="availability">
                        I am available to go out on.....
                      </span>
                      <span className="availability">
                        {(userVisited.weekends && 'weekends, ') || ''}
                      </span>{' '}
                      &nbsp;
                      <span className="availability">
                        {(userVisited.weekday && 'weekday, ') || ''}
                      </span>{' '}
                      &nbsp;
                      <span className="availability">
                        {(userVisited.weeknights && 'weeknights') || ''}
                      </span>{' '}
                    </>
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </div>
      {/* {msg && userVisited && (
        <Messages otherUserId={userVisited._id} userId={userProfile._id} />
      )} */}
      {!msg && <NavBar props={props} />}
    </>
  )

}

export default UserDetail