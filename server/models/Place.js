let mongoose = require("mongoose")

// do a user and userprofile 
let PlaceSchema = mongoose.Schema(
  {
    name: String,
    type: String,
    region: String,
    ville: String,
    address: String,
    coordonates: [Number],
    cp: String,
    location: {
      type: { String, enum: ['Point'], default: 'Point' },
      coordinates: [Number],
    },
  },
  {
    timestamps: true,
  }
)

let PlaceModel = mongoose.model("Place", PlaceSchema)

module.exports = PlaceModel