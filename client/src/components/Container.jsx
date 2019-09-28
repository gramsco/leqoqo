import React, { useEffect, useState } from 'react'
import api from '../api'
import { Link } from 'react-router-dom'


function Container({ setEventDetail, userProfile, fetchEvents, fetchUsers, fetchUserProfile, events,search,users}) {
      
  useEffect(fetchEvents, [])
  useEffect(fetchUsers, [])
  useEffect(fetchUserProfile, [])
  
  console.log(userProfile)

  function problem() {
    alert("something wrong man")
  }

  function addFav(e) {
    let event = e.target.value
    let user = userProfile._id
    
    api
      .addFavEvent({event,user})
      .then(() => {
        console.log("added to fav")
        fetchEvents()
      })
      .catch(err => console.log(err))
  }

  function removeFav(e) {
    let event = e.target.value
    let user = userProfile._id
    api
      .removeFavEvent({event,user})
      .then(() => {
        console.log("removed from fav")
        fetchEvents()
      })
      .catch(err => console.log(err))
  }


  return (
    <div className="Container">
      
      {search === 'events' &&
        events &&
        events.map((e, i) => (
          
          <div key={e._id} >
            <h2>{e.name}</h2>
            <h3>{e.place.name}</h3>
            <h4>{e.place.ville}</h4>
            <p>{e.event_begin}</p>
            <p>
              {(e.ratings.length === 0 && 'No one rated this event yet!') ||
                (e.ratings.length !== 0 &&
                  e.ratings.map(i => i.rate).reduce((a, b) => a + b) /
                    e.ratings.length)}
            </p>
            <p>
              <i class="fas fa-clock"></i>
              {e.hour_begin}
            </p>
            <p>
              <Link to={`/event-details/${e._id}`}>Details</Link>
            </p>
            <p>{e._id}</p>
           
            {e._id !== "undefined" && (
              <button
                className="Favs"
                style={{
                  height: '200px',
                  width: '200px',
                  border: '1px black solid',
                  fontSize:'30px'
                }}
                value={e._id}
                onClick={e._id !== "undefined" ? e.favs.includes(userProfile._id) ? removeFav : addFav : problem}
              >
                {e._id && 
                  (e.favs.includes(userProfile._id) ? (
                    <i className="fas fa-heart">{e.favs.length}</i>
                  ) : (
                    <i className="far fa-heart">{e.favs.length}</i>
                  ))}
              </button>
            )}
            </div>    
        ))}

      {search === 'persons' &&
        users &&
        users.map((e, i) => (
          <div key={e._id}>
            <div> {e.username || e.email}</div>
          </div>
        ))}
    </div>
  )

}

export default Container