const mongoose = require('mongoose');
let db = require('../config/db')

let Schema = mongoose.Schema

let competitionSchema = new Schema({
  name: {type: String, required: true},
  description: {type: String},
  place: {type: String},
  time: {type: Date default: new Date()},
  category: [{
    name: String,
    tipe: String
  }],
  photo: {type: String}
}, {
  timestamps: true
})

module.exports = mongoose.model('Competition', competitionSchema)
