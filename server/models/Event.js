let mongoose = require('mongoose')

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
  ratings: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
      },
      rate:Number
    }
  ],
  event_begin: Date,
  event_end: Date,
  hour_begin: String,
},
  {
    timestamps: true
  }
)

module.exports = mongoose.model("Event", EventSchema)
