let mongoose = require("mongoose")

// do a user and userprofile 

let SubscriptionSchema = mongoose.Schema(

  {
    name: String,
    cat: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category"
    }],
    description: String,
    image_url:String
  },

)

let SubscriptionModel = mongoose.model("Subscription", SubscriptionSchema)

module.exports = SubscriptionModel