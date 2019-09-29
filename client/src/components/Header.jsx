import React from 'react'


function Header({filter, setFilter, search, setSearch}) {

  


  return (
    <header className="Header" id="top_page">
      <div className="logo">
        <i class="fas fa-search"></i>o <i class="fas fa-search"></i>o
      </div>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} type="text" />

      <div className="Header__filter">
        <div>
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
      </div>
    </header>
  )
}


export default Header;