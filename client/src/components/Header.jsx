import React from 'react'


function Header({ props,filter, setFilter, search, setSearch}) {


  console.log(props)
  console.log("-------")
  const path = props.location.pathname
  console.log(path)


  return (
    <header className="Header" id="top_page">
      
        <div className="left">
        {path === "/profile-settings" ?
          <div className="editProfile">
            <img src="pen.png" alt="filter"/>
            <div>Edit your profile</div>
          </div>
          :
          <div className="editProfile">
            <img src="filter.png" alt="filter"/>
            <div>Filters</div>
          </div>}
        </div>
        

        <div className="center">
        
          <img src="logoqoqo.png" alt="le logo"/>
        
          <div
            className="Header__filter"
            style={{
              visibility: path === "/profile-settings" ?
                "hidden" : "visible"
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
                <input value={filter} onChange={(e) => setFilter(e.target.value)} type="text" />
              </div>

            </div>
        
        </div>
        
        <div className="right">
          {/* {path === "/profile-settings" ? */}
            <div className="editProfile">
              <img src="cog.png" alt="lala"/>
              <div>Paramètres</div>
            </div>
          {/* //   : <div>Something Else</div>
          // } */}
          
        </div>
        

    
     
      
    </header>
  )
}


export default Header;