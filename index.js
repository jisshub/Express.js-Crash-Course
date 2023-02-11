const express = require('express')
const path = require('path')

const app = express()
const logger= require('./middlewares/logger')


// Initialize Middleware
// app.use(logger)

// bodyparser middleware
app.use(express.json())

// handle url encoded data
app.use(express.urlencoded({"extended": false}))


// set static folder
app.use(express.static(path.join(__dirname, 'public')))

// members api routes
app.use('/api/members', require('./routes/api/members'))

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>console.log(`Server runs on port ${PORT}`));

