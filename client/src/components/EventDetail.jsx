import React, { useState, useEffect } from 'react'
import api from '../api'
import NavBar from './NavBar'


function EventDetail(props) {

  
  const [evt, setEvt] = useState({})
  
  const [vote, setVote] = useState("")
  

  

  function sendVote() {
    
    api
      .sendVote(props.match.params.id, JSON.parse(localStorage.user)._id, {vote})
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    api
    .getSingleEvent(props.match.params.id)
    .then(res => setEvt(res))
    .catch(err => console.log(err))
    
  }, [])
  

  return (
    <div className="EventDetail">
      <h1>{evt && evt.name}</h1>
      
      <hr/>
      <input style={{ border: "solid 1px black" }} onChange={(e) => setVote(e.target.value)} type="number" placeholder="2" max="5" min="1" />
      <button style={{ border: "solid 1px black" }} onClick={sendVote}>Send</button>
      <hr/>
      <p>---------------------------</p>

      Persons that want to go to this event :
      <div className="EventDetail__list_of_users">
        {evt.favs &&
          evt.favs.map((e, i) => (
            <>
              {e.username && (
                <div key={i}>
                  {e.emoji}
                  {e.user === JSON.parse(localStorage.user)._id ? "You":e.username}
                </div>)
              }
            </>
          ))}
        {evt.ratings &&
          evt.ratings.map((e, i) => (
          
            <>
              {e.rate && (
                <div key={i}>
                  {e.rate} {e.user}
                  </div>)
              }
            </>

        ))}
      </div>

      {/* <div>Name: {eventDetail.name}</div>
      <div>Place: {eventDetail.place.name}</div>
      <div>Ville: {eventDetail.place.ville}</div>
      <button onClick={() => setEventDetail('')}>Go back</button> */}
      <NavBar props={props}/>
    </div>
  )
}

export default EventDetail