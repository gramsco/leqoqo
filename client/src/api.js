import axios from 'axios'

console.log(process.env.NODE_ENV)

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? '/api'
      : `http://${window.location.hostname}:5000/api`,

  withCredentials: true,
})

const errHandler = err => {
  console.error(err)
  if (err.response && err.response.data) {
    console.error('API response', err.response.data)
    throw err.response.data.message
  }
  throw err
}

export default {
  service: service,

  // This method is synchronous and returns true or false
  // To know if the user is connected, we just check if we have a value for localStorage.getItem('user')
  isLoggedIn() {
    return localStorage.getItem('user') != null
  },

  // This method returns the user from the localStorage
  // Be careful, the value is the one when the user logged in for the last time
  getLocalStorageUser() {
    return JSON.parse(localStorage.getItem('user'))
  },

  // This method signs up and logs in the user
  signup(userInfo) {
    return service
      .post('/Signup', userInfo)
      .then(res => {
        // If we have localStorage.getItem('user') saved, the application will consider we are loggedin
        localStorage.setItem('user', JSON.stringify(res.data))
        return res.data
      })
      .catch(errHandler)
  },

  login(email, password) {
    return service
      .post('/login', {
        email,
        password,
      })
      .then(res => {
        // If we have localStorage.getItem('user') saved, the application will consider we are loggedin
        localStorage.setItem('user', JSON.stringify(res.data))
        console.log(res.data._id)
      })
      .catch(errHandler)
  },

  logout(id) {
    localStorage.removeItem('user')
    return service.get(`/logout/${id}`)
  },
        

  // This is an example on how to use this method in a different file
  // api.getCountries().then(countries => { /* ... */ })

  getCategories() {
    return service
      .get('/categories')
      .then(res => res.data)
      .catch(errHandler)
  },

  newCategory(body) {
    return service
      .post('/categories', body)
      .then(res => res.data)
      .catch(errHandler)
  },

  destroyCategory(params) {

    return service
      .delete('/categories/' + params)
      .then(res => res.data)
      .catch(errHandler)
  },

  getUsers() {
    return service
      .get("/users")
      .then(res => res.data)
      .catch(errHandler)
  },

  getSingleUser(id) {
    return service
      .get("/user/" + id)
      .then(res => res.data)
      .catch(errHandler)
  },

  newUser(body) {
    return service
      .post("/users", body)
      .then(res => res.data)
      .catch(errHandler)
  },

  deleteUser(id) {
    return service
      .delete("/users/" + id)
      .then(res => res.data)
      .catch(errHandler)
  },

  getSubscriptions() {
    return service
      .get("/subscriptions")
      .then(res => res.data)
      .catch(errHandler)
  },

  newSubscription(body) {
    console.log(body)
    return service
      .post("/subscriptions", body)
      .then(res => res.data)
      .catch(errHandler)
  },

  deleteSubscription(id) {
    return service
      .delete("/subscriptions/" + id)
      .then(res => res.data)
      .catch(errHandler)
  },


  getPlaces() {
    return service
      .get("/places")
      .then(res => res.data)
      .catch(errHandler)
  },

  getSinglePlace(id) {
    return service
      .get(`/places/${id}`)
      .then(res => res.data)
      .catch(errHandler)
  },

  sendEvent(body) {
    return service
      .post('/events', body)
      .then(res => res.data)
      .catch(errHandler)
  },

  getSingleEvent(id) {
    return service
      .get("/event/" + id)
      .then(res => res.data)
      .catch(err => console.log(err))
  },

  getEvents() {
    return service
      .get("events")
      .then(res => res.data)
      .catch(errHandler)

  },

  addPicture(file) {
    const formData = new FormData()
    formData.append('picture', file)
    return service
      .post('/endpoint/to/add/a/picture', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => res.data)
      .catch(errHandler)
  },

  addUserprofile(body) {
    console.log(body)
    return service
      .post("/add-profile", body)
      .then(res => res.data)
      .catch(errHandler)
  },

  getAllUserProfiles() {
    console.log("loading all the profiles")
    return service
      .get("/user-profile/all")
      .then(res => res.data)
      .catch(errHandler)
  },

  getUserProfile(id) {
    console.log(id)
    return service
      .get("/user-profile/" + id)
      .then(res => res.data)
      .catch(errHandler)
  },

  getUserProfileWithUser(id) {
    console.log(id)
    return service
      .get("/user/" + id)
      .then(res => res.data)
      .catch(errHandler)
  },

  editUserProfile(body) {
    console.log(body)
    console.log("/user-profile/" + body.user)
    return service
      .post("/user-profile/" + body.user, body)
      .then(res => res.data)
      .catch(errHandler)
  },

  removeFavEvent(data) {
    
    return service
      .delete(`/events/${data.event}/${data.user}`)
      .then(res => res.data)
      .catch(errHandler)
  },

  addFavEvent(data) {
    return service
      .post(`/events/${data.event}/${data.user}`)
      .then(res => res.data)
      .catch(errHandler)
  },

  getUserEvents(id) {
    console.log(id)
    return service
      .get(`/events/user/${id}`)
      .then(res => res.data)
      .catch(errHandler)
  },

  sendVote(id,user,vote) {
    return service
      .post(`/event/${id}/${user}`, vote)
      .then(res => res.data)
      .catch(errHandler)
  },

  createRoom(body) {
    return service
      .post("/messages/room", body)
      .then(res => res.data)
      .catch(err => console.log(err))
  },

  connect(id) {
    console.log("connecting...")
    return service
      .post(`/users/connect/${id}`)
      .then(res => {
        console.log(res)
        return !res.data
      })
      .catch(errHandler)
  },
  disconnect(id) {
    
    return service
      .post(`/users/disconnect/${id}`)
      .then(res => {
        return !res.data
      })
      .catch(errHandler)
  }
}

