let mongoose = require("mongoose")

// do a user and userprofile 

let userSchema = mongoose.Schema(

    {
        username: String,
        email: String,
        emoji_img: String,
        questions: [String],
        presentation: String,
        abonnements: [],
        favs: [],
        interests: []
    },
        { timestamps: true }

)

let userModel = mongoose.model( "user", userSchema)

module.exports= userModel