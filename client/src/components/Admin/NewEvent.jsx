import React, { useState, useEffect } from 'react'
import api from '../../api'

function NewEvent({ setSelect,event,cats }) {

  // catégories
  const [cat, setCat] = useState([])
  //formulaire à envoyer
  const [form, setForm] = useState({
    name: "",
    type:"",
    place: event,
    place_name:"",
    cat: cats[0],
    event_begin: "",
    event_end: null,
    hour_begin: "20:00",
    price:0
  })
  
  //date unique ?
  const [uniqueDate, setUniqueDate] = useState("false")

  //chargement ?
  const [fetching, setFetching] = useState("false")

  function sendForm(e) {
    if (form.name === "" || form.event_begin === "") return
    api.sendEvent(form)
    e.preventDefault()
    setSelect("places")
  }

  function handleChange(e) {
    setForm({...form,[e.target.name]:e.target.value})
  }

  useEffect(() => {
  
    
    setFetching(true)

    api
      .getSinglePlace(event)
      .then(res => {
        setForm({ ...form, place_name: res.name })
        setFetching(false)
      })
      .catch(err => console.log(err))
  }, [])


  

    


  // fetch the categories
  
    

  return (
    <>
      <h1>New event</h1>
      <h2>{"@ " + form.place_name}</h2>
      <pre>{JSON.stringify(form)}</pre>
      {fetching && "loaaaaading" || <form>
        <div>
          <label> Nom de l'événement : {" "}
            <input required placeholder="Mozart fête le fromage" onChange={handleChange} name="name" value={form.name} />
          </label>
        </div>

        <div>
          <label> Type d'événement : {" "}
            <input onChange={handleChange} name="type" value={form.type} placeholder="exposition, concert, ... ( à structurer)" type="text"/>
          </label>
        </div>
        <div>
          <label> Catégorie de l'événement : {" "}
            <select value={form.cat} onChange={handleChange} name="cat">
              {cats.map((e, i) => (
                
                <option value={e._id}>{e.name}</option>

              ))}

            </select>
          </label>
        </div>
        <div>
          <label>
            Un seul jour ?
            <input required onChange={(e) => setUniqueDate(!uniqueDate)} type="checkbox" />
          </label>
        </div>
        <div>
          <label> Début de l'événement : {" "}
            <input required type="date" placeholder="Mozart fête le fromage" onChange={handleChange} name="event_begin" value={form.event_begin} />
          </label>
        </div>
        {uniqueDate &&
          <div>
            <label> Fin de l'événement : {" "}
              <input type="date" onChange={handleChange} name="event_begin" value={form.event_begin} />
            </label>
          </div>
        }
        <div>
          <label> Heure de début : {" "}
            <input type="time" placeholder="Mozart fête le fromage" onChange={handleChange} name="hour_begin" value={form.hour_begin} />
          </label>
        </div>

        <div>
          <label> Price (en €) : {" "}
            <input type="number" min="0" max="9999" placeholder="4" onChange={handleChange} name="price" value={form.price} />
          </label>
        </div>

        <button
        
          value="submit"
          onClick={sendForm}
          
        > Send
        </button>

      </form>}

     </>
  )
}

export default NewEvent
