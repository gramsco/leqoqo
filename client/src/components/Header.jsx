import React, {useState} from 'react'
import api from '../api'

function Header({ defaultValue, setConnected, connected, setKm, km, userProfile="", props,filter, setFilter, search, setSearch}) {

  if (userProfile) console.log(userProfile)
  
  const path = props.match.path
  const vh = `${-(km / 10)}`
  const rotate = `rotate(${(km) - 10}deg)`
  
  const [logo, setLogo] = useState('/logoqoqo.png')

  

  function handleLogout() {

    console.log(`trying to disconnect ${userProfile.username}`)
    api
      .disconnect(userProfile._id)
      .then(result => {
        api.logout()
        props.history.push('/')
      })
      .catch(err => console.log(err))
         // Redirect to the home page
  }


  function connectDisconnect() {
    if (connected) {
      api
        .connect(userProfile._id)
        .then(connec => setConnected(connec))
        .catch(err => console.log(err))
    }
    else {
      api
        .disconnect(userProfile._id)
        .then(connec => setConnected(connec))
        .catch(err => console.log(err))
    }
  }

  return (
    <header className="Header" id="top_page">
      {api.isLoggedIn() && (
        <div onClick={handleLogout} class="logout">
          Log out
        </div>
      )}
      {/* <div style={{ visibility: 'hidden' }} className="left">
        {check ? (
          <div className="editProfile">
            <img src="/pen.png" alt="filter" />
            <div>Edit your profile</div>
          </div>
        ) : (
          <div className="editProfile">
              <img src="/filter.png" alt="filter" />
            <div>Filters</div>
          </div>
        )}
      </div> */}

      {/* <div style={{ cursor: 'pointer' }} onClick={connectDisconnect}>
          {connected ? '🔵' : '🔴'}
        </div> */}

      <div
        className="Header__filter"
        style={{
          visibility:
            path === '/home' && api.isLoggedIn()
              ? 'visible'
              : path === '/' && api.isLoggedIn()
              ? 'visible'
              : 'hidden',
        }}
      >
        <div className="events-persons">
          <input
            type="radio"
            id="huey"
            name="events"
            value="huey"
            checked={search === 'events'}
            onClick={() => setSearch('events')}
          />

          <label for="huey">Events</label>

          <input
            type="radio"
            id="dewey"
            name="persons"
            value="dewey"
            checked={search === 'persons'}
            onClick={() => setSearch('persons')}
          />
          <label for="dewey">Persons</label>
          <div class="query">
            <i class="fas fa-search"></i>
            <input
              value={filter}
              onChange={e => setFilter(e.target.value)}
              type="text"
            />
          </div>
        </div>
      </div>

      <div
        className="logo_container"
        onMouseEnter={() => setLogo('/happy_qoqo.png')}
        onMouseLeave={() => setLogo('/logoqoqo.png')}
      >
        <img
          style={{
            height: vh,
            transform: rotate,
          }}
          src={logo}
          alt="le logo"
        />
      </div>

      <div
        style={{
          visibility:
            path === '/home' && api.isLoggedIn()
              ? 'visible'
              : path === '/' && api.isLoggedIn()
              ? 'visible'
              : 'hidden',
        }}
      >
        <input
          onChange={e => setKm(e.target.value)}
          type="range"
          step="10"
          value={km}
          min="10"
          max="1000"
        />
        {km}km {defaultValue && <span>(from default location Paris)</span>}
      </div>

      {/* <div style={{ visibility: 'hidden' }} className="right"> */}
      {/* {path === "/profile-settings" ? */}
      {/* <div className="editProfile">
          <img src="/cog.png" alt="lala" />
          <div>Paramètres</div>
        </div> */}
      {/* //   : <div>Something Else</div>
          // } */}
      {/* </div> */}
    </header>
  )
}


export default Header;