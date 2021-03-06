import React, { useEffect, useState } from 'react'
import api from '../api'
import { Link } from 'react-router-dom'
import Masonry from 'react-masonry-component'
import './userprofiles.css'
import LazyLoad from 'react-lazy-load'
import distance from '@turf/distance'
import Messages from './Messages/Messages'

const masonryOptions = {
  transitionDuration: 5,
}

const breakpointColumnsObj = {
  default: 4,
}

const imagesLoadedOptions = {
  background: '.my-bg-image-el',
  columnWidth: 200,
}


var today = new Date()

console.log(today)

function Container({
  loading,
  km,
  setEventDetail,
  userProfile,
  fetchEvents,
  fetchUsers,
  fetchUserProfile,
  events,
  search,
  userProfiles,
  fetchUserProfiles,
  filter,
  setDefaultValue,
}) {
  useEffect(fetchEvents, [])
  useEffect(fetchUsers, [])
  useEffect(fetchUserProfile,[])
  useEffect(fetchUserProfiles, [])

  //46.7111 Longitude: 1.7191
  const [geoloc, setGeoloc] = useState({lng: 2.3488, lat: 48.85341 })

  function getCurrentCoordinates() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log('The current coords are', position.coords)
        setGeoloc({
          ...geoloc,
          lng: position.coords.longitude,
          lat: position.coords.latitude,
        })
        
        console.log(geoloc)
      })
    }
    else {
      setDefaultValue(true)
      setGeoloc({ ...geoloc, lng: 2.3488, lat: 48.85341 })
    }
  }

  useEffect(() => {
    getCurrentCoordinates()
  }, [])

  console.log(userProfiles)

  function problem() {
    alert('something wrong man')
  }

  function addFav(e) {
    let event = e.target.value
    let user = userProfile._id
    console.log(event, user)

    api
      .addFavEvent({ event, user })
      .then(() => {
        console.log('added to fav')
        fetchEvents()
      })
      .catch(err => console.log(err))
  }

  function removeFav(e) {
    let event = e.target.value
    let user = userProfile._id
    api
      .removeFavEvent({ event, user })
      .then(() => {
        console.log('removed from fav')
        fetchEvents()
      })
      .catch(err => console.log(err))
  }
  console.log(km)

  function sortingEvents(e) {
    // if (e.name === undefined) return
    return (
      distance(e.location.coordinates, [geoloc.lat, geoloc.lng]) < Number(km) &&
      // true)

        (
        (e.name && e.name.toLowerCase().includes(filter.toLowerCase()))
        ||
        (e.city && e.city.toLowerCase().includes(filter.toLowerCase()))
        ||  
        (e.keywords && e.keywords.includes(filter))
        )
      
    )

    // (e.keywords && e.keywords.fr && e.keywords.fr.includes(filter))

    // ||
    // e.place.ville.toLowerCase().includes(filter.toLowerCase())
    // ||
    // e.favs.length >= filter
  }

  function location(a, b) {
    return (
      distance(a.location.coordinates, [geoloc.lat, geoloc.lng]) -
      distance(b.location.coordinates, [geoloc.lat, geoloc.lng])
    )
  }

  function sortingUsers(e) {
    // if (e.name === undefined) return
    return (
      //  distance(
      //   e.location.coordinates, [
      //                   geoloc.lat,
      //                   geoloc.lng,
      //  ]) < Number(km))
      e.username &&
      e.username.toLowerCase().includes(filter.toLowerCase()) &&
      e.connected
      // (e.city && e.city.toLowerCase().includes(filter.toLowerCase())))
    )
    // (e.keywords && e.keywords.fr && e.keywords.fr.includes(filter))

    // ||
    // e.place.ville.toLowerCase().includes(filter.toLowerCase())
    // ||
    // e.favs.length >= filter
  }

  function location(a, b) {
    return (
      distance(a.location.coordinates, [geoloc.lat, geoloc.lng]) -
      distance(b.location.coordinates, [geoloc.lat, geoloc.lng])
    )
  }

  return (
    <div
      className={'Container'}
      options={masonryOptions}
      disableImagesLoaded={false} // default false
      updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
      imagesLoadedOptions={imagesLoadedOptions} // default {}
      breakpointCols={breakpointColumnsObj}
    >
      {loading && ''}
      {search === 'events' &&
        events &&
        events
          .filter(sortingEvents)
          .sort(true ? location : () => true)
          .map(e => (
            <LazyLoad key={e._id}>
              <div
                className="Card"
                style={{
                  backgroundImage: `url(${e.image})`,
                }}
              >
                {
                  <a href={`/event-details/${e._id}`} className="HiddenCard">
                    <h3>
                      {e.location && geoloc &&
                        distance(e.location.coordinates, [
                          geoloc.lat,
                          geoloc.lng,
                        ]).toFixed(2) + ' km'}
                    </h3>
                    {e.event_end < today ? 'qoqover :(' : ''}
                    {e.keywords &&
                      e.keywords.map((e, i) => (
                        
                          i < 3 ? <span key={i}>{`# ${e}`}</span>:""
                        
                      ))}
                  </a>
                }
                <div class="NameTag">{e.name}</div>

                {/* <div>{e.location.coordinates}</div> */}

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
                    {e._id && (e.favs.includes(userProfile._id) ? '</3' : '<3')}
                  </button>
                )}
              </div>
            </LazyLoad>
          ))}

      {/* <div className="userprofiles"> */}
      {search === 'persons' &&
        userProfiles &&
        userProfiles.filter(sortingUsers).map((e, i) => (
          <>
            {e.username && (
              <a href={`/profile/${e._id}`}>
                <div key={e._id} className="userContainer newcontainer">
                  <div className="emj"> {e.emoji}</div>
                  <div className="test"> {e.username}</div>

                  <div style={{ visilibity: "hidden" }} className="test love">
                    <i class="fab fa-gratipay"></i>
                  </div>

                  <div className="test"> {e.address}</div>
                </div>
              </a>
            )}
          </>
        ))}

      {search === 'messages' && <Messages userId={userProfile._id} />}

      {/* </div> */}
    </div>
  )
}

export default Container
