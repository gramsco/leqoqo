import React,{useState,useEffect} from 'react'
import Header from './Header'
import NavBar from './NavBar'
import api from '../api'


function Favs(props) {

  const [profile, setProfile] = useState({})
  const [favs, setFavs] = useState([])
  
  console.log("--favs--")
  console.log(favs)
  console.log("--favs--")

  useEffect(() => {

    api
    .getUserProfileWithUser(JSON.parse(localStorage.user)._id)
    .then(res => setProfile(res))
    .catch(err => console.log(err))

  }, [])
  
  useEffect(() => {

    api
      .getUserEvents(profile._id)
      .then(res => {
        console.log(res)
        setFavs(res)
      })
      .catch(err => console.log(err))
  }, [profile])
   
  
  return (
    <>
      <Header props={props} />
      <div className="Container">
        <h2>The Favs Page of {profile.username}</h2>
        {favs.map((e, i) => (
          <div>{e.name}</div>
        ))}
      </div>
      <NavBar props={props} />
    </>
  )

}

export default Favs