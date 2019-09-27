import React from 'react'
import api from '../api'

function EventDetail({setEventDetail, eventDetail}) {
  
console.log(eventDetail)
  return (
    <div className="Container">
      <div>Name: {eventDetail.name}</div>
      <div>Place: {eventDetail.place.name}</div>
      <div>Ville: {eventDetail.place.ville}</div>
      <button onClick={() => setEventDetail("")}>Go back</button>
    </div>
  )
}

export default EventDetail