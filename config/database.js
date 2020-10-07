const mongoose = require('mongoose')
const config = require('config')

module.exports = () => {
  mongoose.connect(
    config.get('mongoURI'),
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    () => {
      console.log('Database connected')
    }
  )
}
