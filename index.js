const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger= require('./middlewares/logger');
const members = require('./members')

const app = express()

// Handlebars Middlware
app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Initialize Middleware
// app.use(logger)

// bodyparser middleware
app.use(express.json())

// handle url encoded data
app.use(express.urlencoded({"extended": false}))


// Homepage route
app.get('/', (req, res)=>res.render('index', {
    title: 'Member App',
    members
}));

// set static folder
app.use(express.static(path.join(__dirname, 'public')))




// members api routes
app.use('/api/members', require('./routes/api/members'))

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>console.log(`Server runs on port ${PORT}`));

