import React, {useState,useEffect} from 'react'
import api from './../../api'
import NavBar from './../NavBar'
import Messages from './Messages'

function ListMessages() {

  let users_infos = JSON.parse(localStorage.user)

  const [profile, setProfile] = useState({})
  const [otherUser, setOtherUser] = useState("")
  console.log(profile)

  useEffect(() => {

  api
    .getUserProfileWithUser(users_infos._id)
    .then((res) => setProfile(res))
    .catch(err => console.log(err))

  }, [])
  

  

  return (
    <div className="ListMessages">
      <ul className="ListMessages__Contacts">
        {profile.chats_user &&
          profile.chats_user.map(e => (
            <li
              style={{ cursor: 'pointer' }}
              onClick={() => {
                setOtherUser("")
                setTimeout(() => {
                  setOtherUser(e._id)
                }, 100)
              }}
              key={e._id}
            >
              {e.emoji}
              {e.username}
            </li>
          ))}
      </ul>
      <button onClick={() => setOtherUser("")}>Hide chat</button>
      <Messages classs="Messages_list" userId={profile._id} otherUserId={otherUser} />
      <NavBar />
    </div>
  )
  
}

export default ListMessages