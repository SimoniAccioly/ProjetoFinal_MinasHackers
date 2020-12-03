const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
    required: true,
  },
  eventName: {
    type: String,
    required: true,
  },
  eventDate: {
    type: Date,
    required: true,
  },
  category: { //front, back, ou full
    type: String,
    required: true,
  },
  mainTheme: { //html, css, dados, node, javascript...
    type: String,
    required: true,
  },
  costs: { //pago ou gratuito
    type: String,
    required: true,
  },
  subcategory: { //seminário, palestra, curso, oficina, etc
    type: String,
    required: true,
  },
  registeredBy: { //nomedousuário
    type: String,
    required: true,
  },
});

//como fazer para todos os itens serem preenchidos? é front?
//como fazer para na busca ser apenas o item já existente?
//como colocar o nome do usuário registrado para entrar automáticamente no registeredBy

const newRegisterCollection = mongoose.model('newRegister', eventSchema)
module.exports = newRegisterCollection