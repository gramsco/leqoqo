const express = require('express')
const router = express.Router()
const UserProfile = require('../models/UserProfile')

router.post('/messages/room', (req, res, next) => {
  
  console.log(req.body)

  UserProfile
    .findByIdAndUpdate(
      req.body.first_id,
      {
        $addToSet:
          { chats_user: req.body.second_id }
      })
    .then(UserProfile
      .findByIdAndUpdate(
        req.body.second_id,
        {
          $addToSet:
            { chats_user: req.body.first_id }
        })
      .then(() => res.sendStatus(200))
      .catch(err => console.log(err))
    )
    .catch(err => console.log(err))
})
  
  
  

module.exports = router
