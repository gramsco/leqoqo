let mongoose = require("mongoose")

// do a user and userprofile 

let userSchema = mongoose.Schema(

    {
        username: String,
        email: String,
        password: String
    },
    { timestamps: true }

)

let userModel = mongoose.model("user", userSchema)

module.exports = userModel