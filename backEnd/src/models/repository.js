const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost/minasHackers'

const connect = () => {
    mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
    const connection = mongoose.connection

    connection.on('error', () => console.error('Erro ao conectar'))
    connection.once('open', () => console.error('Conectamos ao Mongo <3'))
}

module.exports = { connect }