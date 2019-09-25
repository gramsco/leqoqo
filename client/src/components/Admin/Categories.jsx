import React, { useState, useEffect } from 'react'
import axios from 'axios'
import api from '../../api'

function Categories({ cats, fetchCategories }) {
  const [cat, setCat] = useState('')

  useEffect(fetchCategories, [])

  function newCat(e) {
    e.preventDefault()
    api
      .newCategory({ name: cat })
      .then(resp => {
        console.log(resp)
        fetchCategories()
      })
      .catch(err => console.log(err))
  }
  function destroyCat(e) {
    e.preventDefault()
    if (
      !window.confirm(
        `t'es VRAIMENT sure que tu veux détruire la catégorie id ${e.target.value} ?`
      )
    ){
      return
    }
    api
      .destroyCategory(e.target.value)
      .then((resp) => {
        console.log(resp)
        fetchCategories()
        console.log('category destroyed')
      })
      .catch(err => console.log(err))
  }

  function handleCat(e) {
    setCat(e.target.value)
  }
  
  


  return (
    <>
      <h2>TOUT EN ANGLAIS STP</h2>
      <hr />
      <form>
        <input value={cat} onChange={handleCat} type="text" />
        <button onClick={newCat}>
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
          {cats && cats.map((e, i) => (
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
