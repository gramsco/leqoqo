let mongoose = require('mongoose')
let Schema = mongoose.Schema

let EventSchema = mongoose.Schema({

  type: String,
  name:String,
  place: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Place"
  },
  cat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  },
  favs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserProfile"
  }],
  city:String,
  keywords:Object,
  image:String,
  lat: Number,
  long: Number,
  ratings: [new Schema({
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"UserProfile"
      },
      rate: Number,
  }, { _id: false })],
  event_begin: Date,
  event_end: Date,
  hour_begin: String,
  description:Object,
  location: {
    type: { String, enum: ['Point'], default: 'Point' },
    coordinates: [Number],
  },
},
  {
    timestamps: true
  }
)

module.exports = mongoose.model("Event", EventSchema)
