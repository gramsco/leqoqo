import React,{useState,useEffect} from 'react'
import axios from 'axios'
import api from '../../api'

function Categories() {
  
  const [categories,setCategories] = useState([])
  const [cat, setCat] = useState("")
  
  let n = 0
  useEffect(() => {
    api
      .getCategories()
      .then(resp => setCategories(resp))
      .catch(err => console.log(err))
  },[n]) 

  function newCat(e) {
    api
      .newCategory({ name: cat })
      .then(resp => console.log(resp))
      .catch(err => console.log(err))
  }

  function handleCat(e) {
    setCat(e.target.value)
  }

  function handleCats() {
    api
      .getCategories()
      .then(resp => setCategories(resp))
      .catch(err => console.log(err))
  }

  function destroyCat(e) {
    
    if (!window.confirm(`t'es VRAIMENT sure que tu veux détruire la catégorie id ${e.target.value} ?`)) return
    api
      .destroyCategory(e.target.value )
      .then(() => console.log("category destroyed"))
      .catch(err => console.log(err))
    
  }

  
  return (
    <>
      <h2>TOUT EN ANGLAIS STP</h2>
      <hr/>
      <form>
        <input value={cat} onChange={handleCat} type="text" />
        <button onClick={newCat} onChange={handleCats}>
          New Category
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th>_ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((e, i) => (
            <tr key={i}>
              <td>{e._id}</td>
              <td>{e.name}</td>
              <td>
                <form>
                  <button value={e._id} type="submit" onClick={destroyCat}>
                  destroy the mofo
                </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Categories