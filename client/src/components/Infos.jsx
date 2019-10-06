import React from 'react'
import NavBar from './NavBar'
import {Link} from 'react-router-dom'

function Infos(props) {

  return (
    <div className="Infos">
      <h2 class="infoHeading">Le QoQo</h2>
      <p className="desx">
        A guide to find events of your interest in France and the good plans for
        your outings and leisures with someone of similar interest!!!
      </p>

      <div className="setti">
        <p>
          An original idea by <strong>Setti Rais Ali</strong>{' '}
        </p>
      </div>

      <div className="dev_team">
        <h3 className="devtt">The QoQoding team</h3>
        <div className="Antonin">
          <p>
            {' '}
            <strong>Antonin (@gramsco)</strong>
          </p>
          <a target="_blank" href="https:/github.com/gramsco">
            <i class="fab fa-github ninja-icon"></i>
          </a>
        </div>

        <div className="Niraja">
          <p>
            <strong>Niraja (@niraja426)</strong>
          </p>
        </div>
        <a target="_blank" href="https://github.com/niraja426">
          <i class="fab fa-github ninja-icon"></i>
        </a>
      </div>

      <NavBar />
    </div>
  )

}

export default Infos