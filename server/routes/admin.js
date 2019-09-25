const express = require('express')
const { isLoggedIn } = require('../middlewares')
const router = express.Router()
const CategoryModel = require("../models/Category")

router.delete('/categories/:id', (req, res, next) => {
  
  
  CategoryModel
    .findByIdAndDelete(req.params.id)
    .then(() => console.log("mofo destroyed"))
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

// router.post('/admin/', isLoggedIn, (req, res, next) => {
 
//   res.send(req.user)

// })

module.exports = router
