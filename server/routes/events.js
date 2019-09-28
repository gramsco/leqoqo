const express = require("express")
const router = express.Router()
const EventModel = require("../models/Event")


router.get("/events/user/:id", (req, res, next) => {

  console.log("$$$$$$$$$$")
  console.log(req.params.id)
  console.log("$$$$$$$$$$")
  EventModel
    .find({favs: req.params.id})
    .populate("place")
    .then(dataRes => {
      res.send(dataRes)
    })
    .catch(err => console.log(err))
})


router.get("/event/:id", (req, res, next) => {
  
  console.log(req.params.id)

  EventModel
    .findById(req.params.id)
    .populate("favs")
    .then(dataRes => {
      console.log(dataRes)
      res.send(dataRes)
    })
    .catch(err => console.log(err))


})

router.delete('/events/:event/:user', (req, res, next) => {
  
  EventModel
    .findByIdAndUpdate(req.params.event, { $pullAll: { favs: [req.params.user] } })
    .then(dataRes => res.send(dataRes))
    .catch(err => console.log(err))

})


router.post("/events/:event/:user/", (req, res, next) => {

  EventModel
    .findByIdAndUpdate(req.params.event,{ $addToSet: { favs: [req.params.user] }})
    .then((dataRes) => {
      console.log(dataRes)
      res.send(dataRes)
    })
    .catch(err => console.log(err))
  
})

module.exports = router