import React from 'react'
import NavBar from './NavBar'

function Infos(props) {

  return (

    <div className="Infos">
      <h1>Le QoQo</h1>

      <div>An original idea by Setti Rais Ali</div>

      <div className="dev_team">
        <div className="Niraja">My name is Niraja, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus assumenda voluptatem harum in dicta. Quisquam voluptates soluta deserunt aperiam, quo repellat. Temporibus aperiam nobis corporis doloribus tenetur consequuntur doloremque!</div>
        <div className="Antonin">My Name is Antonin, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure nihil cupiditate delectus quo fuga quod rerum perspiciatis nesciunt ad suscipit, explicabo ullam dolorem voluptate, doloremque corrupti? Recusandae unde omnis alias.</div>
      </div>

      <NavBar />
    </div>

  )

}

export default Infos