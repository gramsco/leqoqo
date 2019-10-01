import React, { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'
import api from '.././api'
import 'mapbox-gl/dist/mapbox-gl.css'
mapboxgl.accessToken = 'pk.eyJ1IjoiZ3JhbXNjbyIsImEiOiJjazB3ZG5oaXQwMjNrM2NtbTh1bWh0NWtzIn0.5zWaES3a2JH0EZbd7t8aMA'


export default function Map() {
  
  const mapDomRef = useRef(null)
  let map = useRef(null).current
  let markers = useRef(null).current

  useEffect(() => {
    initMap(15, 45)
  }, ) // Antonin : react told me to leave the dependancy thing blank.... :/ ?

  // useEffect(() => {
  //   api.getEvents()
  //     .then(events => {
  //       events = events.filter(e => Boolean(e.location))
  //       markers = []
  //       for (let i = 0; i < events.length; i++) {
  //         markers.push = new mapboxgl.Marker({ color: 'red' })
  //           .setLngLat({ long:events[i].long, lat:events[i].lat })
  //           .addTo(map)
  //       }
  //     })
  // }, [])

  function initMap(lng, lat) {
    // Embed the map where "mapDomRef" is defined in the render
    map = new mapboxgl.Map({
      container: mapDomRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [2.3488, 48.8534],
      zoom: 5,
    })

    // Add zoom control on the top right corner
    map.addControl(new mapboxgl.NavigationControl())
  }

  return (
    <div>
      <div ref={mapDomRef} style={{ height: 400 }}></div>
    </div>
  )
}