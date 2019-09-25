import React from 'react'

function NewSubscription() {
  
  return (
    <form method="post" action="/admin/new_sub">
      <input name="name" type="text" />
      <input name="cat" type="text" />
    </form>
  )

}

export default NewSubscription