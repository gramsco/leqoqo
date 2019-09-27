import React, { useEffect } from 'react'


function Container({ setEventDetail, fetchEvents, fetchUsers, events,search,users}) {
      
  useEffect(fetchEvents, [])
  useEffect(fetchUsers, [])
  
  console.log(users)
  
  return (
    <div className="Container">
      
      {search === 'events' &&
        events &&
        events.map((e, i) => (
          <div
            key={i}
            onClick={() => setEventDetail(e)}>
            <h2>{e.name}</h2>
            <h3>{e.place.name}</h3>
            <h4>{e.place.ville}</h4>
            <p>{e.event_begin}</p>
            <p>{
              e.ratings.length === 0 && "No one rated this event yet!"
              ||
              e.ratings.length !== 0 && (e.ratings.map(i => i.rate).reduce((a,b) => a+b)) / e.ratings.length
            }</p>
            <p>
              <i class="fas fa-clock"></i>
              {e.hour_begin}
            </p>
            <button>Add to favs</button>
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