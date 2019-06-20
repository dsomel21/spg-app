const mongoose = require('mongoose')
const Schema = mongoose.Schema

const trackSchema = new Schema({
  name: String,
  description: String,
  length_minutes: { type: Number, minlength: 1 }
})

// Export the schema
module.exports = mongoose.model('Track', trackSchema)
