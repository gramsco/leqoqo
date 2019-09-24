let mongoose = require("mongoose")

// do a user and userprofile 

let UserProfileSchema = mongoose.Schema(

    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },  
        emoji_img: String,
        questions: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Question"
        }],
        presentation: String,
        subscriptions: [{
            type: mongoose.Schema.Types.ObjectId,
            ref:"Subscription"
        }],
        fav_users: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }],
        fav_events: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Event"
        }],
        interests: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Interest"
        }]
    },
    { timestamps: true }

)

let UserProfile = mongoose.model("user", UserProfileSchema)

module.exports = UserProfile