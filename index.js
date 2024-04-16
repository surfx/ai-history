const express = require('express');
// Express Initialize
const app = express();

const port = 8000;
app.listen(port, () => {
    console.log('listen port 8000');
});

const Usuario = {
    id: 3,
    nome: "TESTE 1",
    ativo: true
};

//create api
app.get('/', (req, res) => {
    res.send(Usuario);
});

app.get('/hello_world', (req, res) => {
    res.send('Hello World');
});