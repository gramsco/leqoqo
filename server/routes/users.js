const express = require("express")
const router = express.Router()
const UserProfileModel = require("../models/UserProfile")
const Chatkit = require('@pusher/chatkit-server');

const chatkit = new Chatkit.default({
    instanceLocator: process.env.CHAT_INSTANCE_LOCATOR,
    key: process.env.CHAT_KEY,
})


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
        
    console.log("req body")
    console.log(req.body)
    console.log("req body")

    UserProfileModel
        .findOneAndUpdate({ user: req.params.id },req.body)
        .then((dataRes) => {
            chatkit.updateUser({
                id: dataRes._id,
                name: dataRes.username,
            })
            .then(() => res.sendStatus(200))
            .catch(err => console.log(err))
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

router.get("/user/:id", (req, res, next) => {
    
    UserProfileModel
        .findOne({ user: req.params.id })
        .populate('chats_user')
        .then(dataRes => res.send(dataRes))
        .catch(err => console.log(err))  
})


router.get("/user-profile/:id", (req, res, next) => {
    
    console.log(req.params.id)
    UserProfileModel
        .findById(req.params.id)
        .then(dataRes => {
            console.log("-----user profile------")
            console.log(dataRes)
            console.log("-----------------------")
            res.send(dataRes)
        })
        .catch(err => console.log(err))
})




module.exports = router