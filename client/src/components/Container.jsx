import React, { useEffect, useState } from 'react'
import api from '../api'
import { Link } from 'react-router-dom'
import Masonry from 'react-masonry-component'


const masonryOptions = {
  transitionDuration:5
}

const breakpointColumnsObj = {
  default: 4,
};

const imagesLoadedOptions = {
  background: '.my-bg-image-el',
  columnWidth: 200
}

function Container({ setEventDetail, userProfile, fetchEvents, fetchUsers, fetchUserProfile, events, search, users, filter }) {
      
  useEffect(fetchEvents, [])
  useEffect(fetchUsers, [])
  useEffect(fetchUserProfile, [])
  
  console.log(userProfile)

  function problem() {
    alert("something wrong man")
  }

  function addFav(e) {
    let event = e.target.value
    let user = userProfile._id
    
    api
      .addFavEvent({event,user})
      .then(() => {
        console.log("added to fav")
        fetchEvents()
      })
      .catch(err => console.log(err))
  }

  function removeFav(e) {
    let event = e.target.value
    let user = userProfile._id
    api
      .removeFavEvent({event,user})
      .then(() => {
        console.log("removed from fav")
        fetchEvents()
      })
      .catch(err => console.log(err))
  }

  // function sorting(e) {

  //   return (
  //     e.name.toLowerCase().includes(filter.toLowerCase())
  //     // ||
  //     // e.place.name.toLowerCase().includes(filter.toLowerCase())
  //     // ||
  //     // e.place.ville.toLowerCase().includes(filter.toLowerCase())
  //     // ||
  //     // e.favs.length >= filter
  //   )
  // }


  return (
    <div
      className={'Container'}
      options={masonryOptions}
      disableImagesLoaded={false} // default false
      updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
      imagesLoadedOptions={imagesLoadedOptions} // default {}
      breakpointCols={breakpointColumnsObj}
    >
    

      {search === 'events' &&
        
        events &&
        events
        // .filter(sorting)
        .map((e, i) => (
          // if cat === cinema, then backgroundImage === cinema.jpg, etc
          
          <div style={{ backgroundImage:`url("${e.cat}.jpg")`}} key={e._id}>
            <h2>{e.name}</h2>
            {/* <h3>{e.place.name}</h3> */}
            {/* <h4>{e.place.ville}</h4> */}
            <p>{e.event_begin}</p>
            <p>
              {(e.ratings.length === 0 && 'No one rated this event yet!') ||
                (e.ratings.length !== 0 &&
                  // e.ratings.map(e => <div>{e.rate}</div>)
                  e.ratings.map(i => i.rate).reduce((a, b) => a + b, 0) /
                    e.ratings.length)}
            </p>
            <p>
              <i class="fas fa-clock"></i>
              {e.hour_begin}
              {' | '}
              <Link to={`/event-details/${e._id}`}>Details</Link>
            </p>
            <p>
              {e.favs.length +
                ` qoqonaute${e.favs.length > 1 ? 's' : ''} want to go there`}
            </p>

            {e._id !== 'undefined' && (
              <button
                className="Favs"
                style={{
                  border: '1px black solid',
                  fontSize: '15px',
                }}
                value={e._id}
                onClick={
                  e._id !== 'undefined'
                    ? e.favs.includes(userProfile._id)
                      ? removeFav
                      : addFav
                    : problem
                }
              >
                {e._id && (e.favs.includes(userProfile._id) ? 'remove' : 'add')}
              </button>
            )}
          </div>
        ))}

      {search === 'persons' &&
        users &&
        users.map((e, i) => (
          <div key={e._id}>
            <div> {e.username || e.email}</div>
          </div>
        ))}
    </div>
  )

}

export default Container