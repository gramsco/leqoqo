let mongoose = require("mongoose")
require('dotenv').config()

mongoose
    .connect(`${process.env.MONGODB_URI}`, { useNewUrlParser: true })
    .then(() => console.log("connected to db"))
    .catch(err => console.log(err))

let userModel = require("./User")


let userData = [
    {
        username: "Roger",
        email: "roger@roger.com",
        emoji_img: "💩"
    },
    {
        username: "Lalala",
        email: "lala@lala.com",
        emoji_img: "🌈"
    }
]

userModel
    .insertMany(userData)
    .then(() => console.log("youpi"))
    .catch(err => console.log(err))