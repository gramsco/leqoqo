const express = require("express")
const router = express.Router()
const UserProfileModel = require("../models/UserProfile")


router.get("/", (req, res, next) => {

    res.send(200)

})

router.post("/add-profile", (req, res, next) => {
    console.log(req.body)
    const { user, emoji, info, address } = req.body
    UserProfileModel.create({ user, emoji, info, address })
        .then(() => res.send("successful"))
        .catch(err => console.log(err))

})

router.post("/user-profile/:id", (req, res, next) => {
        
    console.log(`REQ BODY : ${req.body}`)

    UserProfileModel
        .findOneAndUpdate({ user: req.params.id },req.body)
        .then(() => {
            res.send(200)
            console.log(":)")
        })
        .catch(err => console.log(err))
    

})

router.get("/user-profile/all", (req, res, next) => {
    
    UserProfileModel
        .find()
        .then(dataRes => {
            console.log(dataRes)
            res.send(dataRes)
        })
        .catch(err => console.log(err))

})

router.get("/user-profile/:id", (req, res, next) => {
    
    console.log(req.params.id)
    UserProfileModel
        .findOne({ user: req.params.id })
        .then(dataRes => {
            console.log("-----user profile------")
            console.log(dataRes)
            console.log("-----------------------")
            res.send(dataRes)
        })
        .catch(err => console.log(err))
})




module.exports = router