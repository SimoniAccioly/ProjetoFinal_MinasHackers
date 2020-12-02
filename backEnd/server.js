const app = require('./src/app');
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Estamos on bb! Rodando em http://localhost:${PORT}`)
});