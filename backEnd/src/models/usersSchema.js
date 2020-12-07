const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dataDeNascimento: {
    type: Date,
    required: true,
  },
  genre: { //feminino, masculino, não binário...
    type: String,
    required: true,
  },
});



const newUser = mongoose.model('newUser', user)
module.exports = newUser