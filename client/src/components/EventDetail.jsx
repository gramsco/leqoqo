import React, { useState, useEffect } from 'react'
import api from '../api'
import NavBar from './NavBar'


function EventDetail(props) {

  const [evt, setEvt] = useState({})

  useEffect(() => {
    api
      .getSingleEvent(props.match.params.id)
      .then(res => setEvt(res))
      .catch(err => console.log(err))
    
  }, [])

  return (
    <div className="EventDetail">
      <h1>{evt && evt.name}</h1>
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
      </div>
      {/* <div>Name: {eventDetail.name}</div>
      <div>Place: {eventDetail.place.name}</div>
      <div>Ville: {eventDetail.place.ville}</div>
      <button onClick={() => setEventDetail('')}>Go back</button> */}
      <NavBar />
    </div>
  )
}

export default EventDetail