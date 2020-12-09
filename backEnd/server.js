
const express = require('express')
const mongoose = require('mongoose')
//const DB_URL = 'mongodb://localhost/minasHackers'
const dotenv = require('dotenv')
const app = express()

dotenv.config()

const PORT = process.env.PORT || 8080;


const connect = () => {
    mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
    const connection = mongoose.connection

    connection.on('error', () => console.error('Erro ao conectar'))
    connection.once('open', () => console.error('Conectamos ao Mongo <3'))
}


app.listen(PORT, () => {
    console.log(`Estamos on bb! Rodando em http://localhost:${PORT}`)
});

module.exports = { connect }