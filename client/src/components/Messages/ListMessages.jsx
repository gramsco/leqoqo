import React, {useState,useEffect} from 'react'
import api from './../../api'
import NavBar from './../NavBar'
import Messages from './Messages'

function ListMessages(props) {

  let users_infos = JSON.parse(localStorage.user)

  const [profile, setProfile] = useState({})
  const [otherUser, setOtherUser] = useState(props.match.params.id)

  console.log(profile)
  useEffect(() => {

  api
    .getUserProfileWithUser(users_infos._id)
    .then((res) => setProfile(res))
    .catch(err => console.log(err))

  }, [])
  

  

  return (
    <div className="ListMessages">
      <button
        style={{ visibility: otherUser === 'all' ? 'hidden' : 'visible' }}
        onClick={() => setOtherUser('all')}
      >
        Hide chat
      </button>
      <div
        className="ListMessages__Contacts"
        style={{ height: otherUser === 'all' ? '100%' : '10vh' }}
      >
        {profile.chats_user &&
          profile.chats_user.map(
            e =>
              profile._id !== e._id && (
                <div
                  style={{
                    cursor: 'pointer',
                    color:e.connected?'green':'red'
                  }}
                  onClick={() => {
                    setOtherUser('all')
                    setTimeout(() => {
                      setOtherUser(e._id)
                    }, 100)
                  }}
                  key={e._id}
                >
                  {e.emoji}
                  {e.username}
      
                </div>
              )
          )}
        <div>🎃fakeUser</div>
        <div>🎃fakeUser</div>
        <div>🎃fakeUser</div>
     
      </div>

      <Messages
        classs="Messages_list"
        userId={profile._id}
        otherUserId={otherUser}
      />
      <NavBar />
    </div>
  )
  
}

export default ListMessages