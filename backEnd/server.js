const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

const PORT = process.env.PORT || 8080;

const index = require("./src/routes/index-route");
const events = require("./src/routes/events-route");
const search = require("./src/routes/search-route");
const login = require("./src/routes/login-route");

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));



app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', index);
app.use('/events', events);
app.use('/search',search);
app.use('/login',login);

app.listen(PORT, () => {
    console.log(`Estamos on bb! Rodando em http://localhost:${PORT}`);
  });

module.exports = app;
