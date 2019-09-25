let mongoose = require("mongoose")

// do a user and userprofile 

let CategorySchema = mongoose.Schema(

  {
    name: String
  },

)

let CategoryModel = mongoose.model("Category", CategorySchema)

module.exports = CategoryModel