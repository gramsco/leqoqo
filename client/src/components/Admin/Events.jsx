import React, { useState, useEffect }from 'react'
import api from '../../api'

function Events() {
  
  const [events, setEvents] = useState([])

  useEffect(() => {

    api
      .getEvents()
      .then(res => setEvents(res))
      .catch(err => console.log(err))

  },[])


  return (

    <>
      <table>
        <thead>
          <tr>
            <th>Name of event</th>
            <th>Name of place</th>
            <th>City</th>
            <th>Price</th>
            <th>Date</th>
            <th>Start Time</th>
          </tr>
        </thead>
        <tbody>

          {events && events.map(e => (

            <tr key={e._id}>
              <td>{e.name}</td>
              <td>{e.place.name}</td>
              <td>{e.place.ville}</td>
              <td>{e.price}</td>
              <td>{e.event_begin}</td>
              <td>{e.hour_begin}</td>
            </tr>


          ))}
        </tbody>
      
      </table>

    </>

  )

}

export default Events