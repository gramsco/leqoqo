import React, { useState, useEffect } from 'react'
import api from '../api'
import NavBar from './NavBar'
import Header from './Header'

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
    <main>
      <Header props={props} />
      <div className="EventDetail">
          <img alt="lalala" src={evt.image} />
        <div>{evt.name}</div>
        <h2>{evt.city}</h2>
        {evt.description && evt.description.fr}
        <div>{evt.keywords && evt.keywords.fr}</div>
      </div>
      <NavBar props={props} />
    </main>
  )
}

export default EventDetail