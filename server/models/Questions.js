const mongoose = require("mongoose");
const Schema = mongoose.Schema

const questionSchema = new Schema({
    question: string
})

const questionModel = mongoose.model("question", questionSchema);
module.exports = questionModel;