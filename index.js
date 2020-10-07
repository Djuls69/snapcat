const express = require('express')
require('./config/database')()

const app = express()
app.use(express.json())

// Routes
require('./routes/userRoute')(app)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log('Server started'))
