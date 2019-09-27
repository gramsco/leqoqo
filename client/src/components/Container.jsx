import React, { useEffect } from 'react'


function Container({ fetchEvents, fetchUsers, events,search,users}) {
      
  useEffect(fetchEvents, [])
  useEffect(fetchUsers,[])

  console.log(users)
  
  return (
    <div className="Container">
      
      {search === 'events' &&
        events &&
        events.map((e, i) => (
          <div key={i}>
            <h2>{e.name}</h2>
            <h3>{e.place.name}</h3>
            <h4>{e.place.ville}</h4>
            <p>{e.event_begin}</p>
            <p>
              <i class="fas fa-clock"></i>
              {e.hour_begin}
            </p>
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