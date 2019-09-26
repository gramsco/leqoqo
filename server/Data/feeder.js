const mongoose = require("mongoose")
// const data = require('./data_clean')
const PlaceModel = require("../models/Place")
const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env') })

mongoose
    .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
    .then(() => console.log("connected!"))
    .catch(err => console.log(err))

//museums
// PlaceModel
//     .insertMany(data)
//     .then(() => console.log('mashallah'))
//     .catch(err => console.log(err))
    

// mongoose.connection.close()