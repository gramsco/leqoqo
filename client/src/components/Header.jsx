import React from 'react'
import api from '../api'

function Header({ changeConnect, setConnected, connected, setKm, km, userProfile="", props,filter, setFilter, search, setSearch}) {

  if (userProfile) console.log(userProfile)
  
  const path = props.match.path
  const id = props.match.params.id
  const check = (id === userProfile._id)

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
      <div style={{ visibility: 'hidden' }} className="left">
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
      </div>

      <div className="center">
        {/* <img
          style={{ cursor: 'pointer' }}
          onClick={() => console.log('clicked')}
          src="/logoqoqo.png"
          alt="le logo"
        /> */}
        <div style={{ cursor: 'pointer' }} onClick={connectDisconnect}>
          {connected ? '🔵' : '🔴'}
        </div>

        <div
          className="Header__filter"
          style={{
            visibility:
              path === '/home'
                ? 'visible'
                : path === '/'
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
          </div>

          <div class="query">
            <i class="fas fa-search"></i>
            <input
              value={filter}
              onChange={e => setFilter(e.target.value)}
              type="text"
            />
          </div>

          <div>
            <input
              onChange={e => setKm(e.target.value)}
              type="range"
              step="10"
              value={km}
              min="10"
              max="1000"
            />
            {km}km
          </div>
        </div>
      </div>

      <div style={{ visibility: 'hidden' }} className="right">
        {/* {path === "/profile-settings" ? */}
        <div className="editProfile">
          <img src="/cog.png" alt="lala" />
          <div>Paramètres</div>
        </div>
        {/* //   : <div>Something Else</div>
          // } */}
      </div>
    </header>
  )
}


export default Header;