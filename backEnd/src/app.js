const express = require('express');
const app = express();
const cors = require('cors');

const database = require('./models/repository')

database.connect() 
 const index = require('./routes/index-route');
 const events = require('./routes/events-route');
 const search = require('./routes/search-route');
 const login = require('./routes/login-route');

app.use(cors());
app.use(express.json());
app.use('/', index);
app.use('/events', events);
app.use('/search',search);
app.use('/login',login);

module.exports = app;
