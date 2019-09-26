import React, { useState, useEffect } from 'react'
import api from '../../api'

function Places({setSelect, setEvent}) {


  const [places,setPlaces] = useState([])
  const [isFetching, setIsFetching] = useState(false);
  const [filter,setFilter] = useState("")

  useEffect(() => {
    setIsFetching(true);
    api
      .getPlaces()
      .then(res => {
        setIsFetching(false);
        setPlaces(res);
      })
      .catch(err => console.log(err));
  }, []);


  function sorting(e) {
    
    return(
      e.name.toLowerCase().includes(filter.toLowerCase())
      ||
      e.type.toLowerCase().includes(filter.toLowerCase())
      ||
      e.ville.toLowerCase().includes(filter.toLowerCase())
      ||
      e.cp.includes(filter)
    )

  }

  function handleClick(e) {
    
    setEvent(e.target.value)
    setSelect("newEvent")
  }

  return (
    <>
      <input placeholder="sort by name" type="text" onChange={(e) => setFilter(e.target.value)}/>
      {"" + places.filter(sorting).length + " results "}
      {isFetching && <span className="rotate"><i class="fas fa-palette"></i></span>}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Ville</th>
            <th>Adresse</th>
          </tr>
        </thead>
        <tbody>
          
          {places && places.filter(sorting).map((e, i) => (
            
              <tr key={i}>
              <td>{e.name}</td>
              <td>{e.type}</td>
              <td>{e.ville}</td>
              <td>{e.address}</td>
              <td><button value={e._id} onClick={handleClick}>Add Event</button></td>
              </tr>
            
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Places
