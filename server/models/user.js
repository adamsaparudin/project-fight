const mongoose = require('mongoose');
let db = require('../config/db')

let Schema = mongoose.Schema

let userSchema = new Schema({
  email: {type: String, require: true},
  fb_id: {type: String},
  name: {type: String},
  profilePic: {type: String},
  gender: {type: String},
  active: {type: Boolean, default: false}
}, {
  timestamps: true
})

module.exports = mongoose.model('User', userSchema)
