const express = require('express')
const { isLoggedIn } = require('../middlewares')
const router = express.Router()
const CategoryModel = require("../models/Category")
const SubscriptionModel = require("../models/Subscription")
const UserModel = require("../models/User")
const PlaceModel = require("../models/Place")
const EventModel = require("../models/Event")

//encryption
const bcrypt = require('bcrypt')
const bcryptSalt = 10

router.delete('/categories/:id', (req, res, next) => {
  
  CategoryModel
    .findByIdAndDelete(req.params.id)
    .then(() => {
      res.send("yeah")
      console.log("mofo destroyed")
    })
    .catch(err => console.log(err))
  
})

router.post('/categories', (req, res, next) => {

  let { name } = req.body

  CategoryModel
    .findOne({ name })
    .then(response => {
      if (response !== null) {
        res.send(409)
        return
      }
      else {
        CategoryModel
          .create({ name })
          .then(() => res.send("youpi!"))
          .catch(err => console.log(err))
      }
    })
    .catch(err => console.log(err))
})


router.get('/categories', (req, res, next) => {
  console.log("someone lookin' for categories")
  CategoryModel
    .find()
    .then(response => {
      console.log(response)
      res.send(response)
    })
    .catch(err => console.log(err))

})


/// SUBSCRIPTIONS

router.get("/subscriptions", (req, res, next) => {

  SubscriptionModel
    .find()
    .populate("cat")
    .then(dataRes => res.send(dataRes))
    .catch(err => console.log(err))
  
})


router.post('/subscriptions', (req, res, next) => {
  
  const {name,cat,description, organization} = req.body
  console.log(cat)
  SubscriptionModel
    .findOne({ name })
    .then((dataRes) => {
      if (Boolean(dataRes)) return
      SubscriptionModel
        .create({ name, cat, description, organization })
        .then(() => res.send("All good"))
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})

router.delete('/subscriptions/:id', (req, res, next) => {
  SubscriptionModel
    .findByIdAndDelete(req.params.id)
    .then(() => res.send(200))
    .catch(err => console.log(err))
})


//USERS

router.delete('/users/:id', (req, res, next) => {
  
  UserModel
    .findByIdAndDelete(req.params.id)
    .then(() => res.send(200))
    .catch(err => console.log(err))  
})

router.post('/users', (req, res, next) => {
  const { username, email, password } = req.body
  if (!email || !password) {
    res.status(400).json({ message: 'Indicate email and password' })
    return
  }

  UserModel.findOne({ email })
    .then(userDoc => {
      if (userDoc !== null) {
        res.status(409).json({ message: 'The user already exists' })
        return
      }
      const salt = bcrypt.genSaltSync(bcryptSalt)
      const hashPass = bcrypt.hashSync(password, salt)
      const newUser = new UserModel({ username, email, password: hashPass })
      return newUser.save()
    })
    .then(() => res.send("new guy"))
    .catch(err => next(err))
})

//ALL USERS
router.get("/users", (req, res, next) => {
 
  UserModel
    .find()
    .then(dataRes => res.send(dataRes))
    .catch(err => console.log(err))

})

//A SINGLE USER
router.get("/user/id", (req, res, next) => {
  
  UserModel
    .findById(req.params.id)
    .then(dataRes => res.send(dataRes))
    .catch(err => console.log(err))
})


//Subscriptions

//Places

router.get("/places/:id", (req, res) => {
  PlaceModel
    .findById(req.params.id)
    .then((dataRes) => res.send(dataRes))
    .catch(() => console.log(err))
})

router.get("/places", (req, res) => {
  PlaceModel
    .find()
    .then((dataRes) => res.send(dataRes))
    .catch(() => console.log(err))
})

//EVENTS

router.get("/events", (req, res) => {
  console.log("wesh")
  EventModel
    .find()
    .populate("place")
    .then(dataRes => {
      console.log(dataRes)
      res.send(dataRes)
    })
    .catch(err => console.log(err))

})

router.post("/events", (req, res) => {

  console.log(req.body)
  const {type,name,place,cat,event_begin,event_end,hour_begin} = req.body
  EventModel
    .create({ type, name, place, cat, event_begin, event_end, hour_begin })
    .then(() => console.log("yeaaah man"))
    .catch(err => console.log(err))
})




module.exports = router
