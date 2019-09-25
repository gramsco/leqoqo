import React, { useState, useEffect } from 'react'
import api from '../../api'
import moment from 'moment'

function format(date) {
  console.log(moment.locale('fr'))
  return moment(date).format('LL')
}

function Users({users, fetchUsers}) {

  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password:""
  })
  
  useEffect(fetchUsers, [])
    
  function handleUserChange(e) {
    setNewUser({
      ...newUser, [e.target.name]: e.target.value
    })
  }

  function postNewUser(e) {
    e.preventDefault()
    api
      .newUser({
        username: newUser.username,
        email: newUser.email,
        password: newUser.password
      })
      .then(() => fetchUsers())
      .catch(err => console.log(err))
  }

  function destroyUser(e) {
    e.preventDefault()
    if (
      !window.confirm(
        `t'es VRAIMENT sure que tu veux détruire monsieur ${e.target.value} ?`
      )
    ) {
      return
    }

    api
      .deleteUser(e.target.value)
      .then((resp) => {
        console.log(resp)
        fetchUsers()
        console.log('category destroyed')
      })
      .catch(err => console.log(err))
  }


  return (
    <>
      <pre>{JSON.stringify(newUser)}</pre>
      <form onChange={handleUserChange}>
        <input name="username" type="text" placeholder="username" required />
        <input name="email" type="email" placeholder="mail" required />
        <input name="password" type="password" required />
        <button onClick={postNewUser}>Add user</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>username</th>
            <th>email</th>
            <th>Creation</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <td>{user._id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{format(user.createdAt)}</td>
              <td>
                <button>Details</button>
                <button onClick={destroyUser} value={user._id}>Delete user</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Users
