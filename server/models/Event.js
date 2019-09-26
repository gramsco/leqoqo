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
  event_begin: Date,
  event_end: Date,
  hour_begin: String,
},
  {
    timestamps: true
  }
)

module.exports = mongoose.model("Event", EventSchema)
