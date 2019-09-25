import React, { useState, useEffect } from 'react'
import api from '../../api'

function Users() {
    console.log("coucou")

    const [cats, setCats] = useState([])

    useEffect(() => {
        console.log(cats)
        api
        .getCategories()
        .then(resp => setCats(resp))
        .catch(err => console.log(err))
    },[]) 

    return (
      <>
        <form>
          <input value="lala" placeholder="nom" type="text" />
            <select>
                    {cats && cats.map((e, i) => (
                    
                        <option key={i} value={e.name}>{e.name}</option>
                        
             ))}
            </select>
          <input value="lalala" type="text" />
        
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