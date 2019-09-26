import React, {useEffect} from 'react'
import NavBar from "./../components/Admin/NavBar"
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'
import Map from './Map'
import api from '../api'
mapboxgl.accessToken = 'pk.eyJ1IjoiZ3JhbXNjbyIsImEiOiJjazB3ZG5oaXQwMjNrM2NtbTh1bWh0NWtzIn0.5zWaES3a2JH0EZbd7t8aMA'


function Home() {

    return (
        <div>
            <NavBar />
            <p>This is Home Page</p>
            <Map />
        </div>

    )

}
export default Home;