import React, { useState, useEffect } from 'react'
import api from '../../api'

function Users({ cats, subs, fetchSubscriptions }) {
  console.log(subs)

  const [formsub, setFormSub] = useState({
    name: 'no name',
    cat: cats[0],
    organization: 'no organization',
    description: 'no description',
  })

  function sendSub(e) {
    e.preventDefault()
    console.log(formsub)
    api
      .newSubscription(formsub)
      .then(response => {
        fetchSubscriptions()
        console.log(response)
      })
      .catch(err => console.log(err))
  }

  function handleChange(e) {
    setFormSub({
      ...formsub,
      [e.target.name]: e.target.value,
    })
    console.log(formsub)
  }

  function destroySub(e) {
    e.preventDefault()
    // if (
    //   !window.confirm(
    //     "sûre et certaine ???"
    //   )
    // ) {
    //   return
    // }
    api
      .deleteSubscription(e.target.value)
      .then(res => {
        fetchSubscriptions()
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <form onChange={handleChange} className="inline-form">
        <input
          name="name"
          value={formsub.name}
          placeholder="ugc illimité "
          type="text"
          required
        />
        <select name="cat" value={formsub.cat}>
          {cats &&
            cats.map((e, i) => (
              <option key={i} value={e._id}>
                {e.name}
              </option>
            ))}
        </select>
        <input
          name="organization"
          value={formsub.organization}
          type="text"
          placeholder="UGC, Le Louvre, ..."
          required
        />
        <textarea
          name="description"
          value={formsub.description}
          placeholder="Describe what it does!"
          type="text"
          required
        />
        <button type="submit" onClick={sendSub}>Add subscription</button>
      </form>

      <hr />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Organization</th>
            <th>Description</th>
            <th>Image_url</th>
          </tr>
        </thead>
        <tbody>
          {subs.map((e, i) => (
            <>
              {/* <pre>{JSON.stringify(e)}</pre> */}

              <tr key={i}>
                <td>{e._id}</td>
                <td>{e.name}</td>
                <td>{e.cat && e.cat.name}</td>
                <td>{e.organization}</td>
                <td>{e.description}</td>
                <td>image:todo</td>
                <td><button value={e._id} onClick={destroySub}>Delete</button></td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Users
