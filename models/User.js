const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true
  },
  fullName: String,
  pseudo: String,
  avatar: String,
  password: String
})

module.exports = User = mongoose.model('users', userSchema)
