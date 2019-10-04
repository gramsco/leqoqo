import React from 'react'
import NavBar from './NavBar'

function Infos(props) {

  return (

    <div className="Infos">
      <h2 class="infoHeading">Le QoQo</h2>
      <p className="desx">A guide to find events of your interest in France and the good plans for your outings and leisures with someone of similar interest!!!</p>

      <div className="setti">
        <p>An original idea by <strong>Setti Rais Ali</strong> </p>
      </div>

      <div className="dev_team">
        <h3 className="devtt">The DEV TEaM</h3>
        <div className="Antonin">

          <i className="fas fa-user-ninja ninja-icon"></i>

          <p> <strong>Antonin</strong> , Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure nihil cupiditate delectus quo fuga quod rerum perspiciatis nesciunt ad suscipit, explicabo ullam dolorem voluptate, doloremque corrupti? Recusandae unde omnis alias</p>
        </div>


        <div className="Niraja">
          <i className="fas fa-user-ninja ninja-icon"></i>
          <p><strong>Niraja</strong>, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus assumenda voluptatem harum in dicta. Quisquam voluptates soluta deserunt aperiam, quo repellat. Temporibus aperiam nobis corporis doloribus tenetur consequuntur doloremque!</p>
        </div>

      </div>

      <NavBar />
    </div>

  )

}

export default Infos