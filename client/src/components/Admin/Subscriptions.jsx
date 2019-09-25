import React, { useState, useEffect } from 'react'
import api from '../../api'

function Users() {

    const [cats, setCats] = useState([])

    const [sub, setSub] = useState({

        name: "",
        cat: "",
        organization: "",
        description: ""

    })

    useEffect(() => {
        console.log(cats)
        api
        .getCategories()
            .then(resp => {
                setCats(resp)
                setSub({ ...sub, cat: resp[0]._id })
            })
        .catch(err => console.log(err))
    },[]) 

    function sendSub(e) {
        e.preventDefault()
        console.log(sub)
        api
            .newSubscription(sub)
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }

    function handleChange(e) {
        setSub({
            ...sub, [e.target.name]:e.target.value
        })
        console.log(sub)
    }

    return (
      <>
        <form onChange={handleChange} className="inline-form">
          <input name="name" value={sub.name} placeholder="ugc illimité " type="text" />
            <select name="cat" value={sub.cat}>
                    {cats && cats.map((e, i) => (
                    
                        <option key={i} value={e._id}>{e.name}</option>
             ))}
                </select>
                <input name="organization" value={sub.organization} type="text" placeholder="UGC, Le Louvre, ..."/>
                <textarea name="description" value={sub.description} placeholder="Describe what it does!" type="text" />
                <button onClick={sendSub}>Add subscription</button>
        
            </form>
            
        <hr />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Description</th>
              <th>Image_url</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </>
    )
}

export default Users