const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));

app.get('/', function (req, res) {
  res.send('Hello Digas')
})

app.get('/dobrar/:numero', function(requisicao, res) {
    let numero = requisicao.params.numero;
    res.send((numero*2).toString());
});

app.post('/push', function(requisicao, resposta) {
    var mensagem = requisicao.body;
    var result = enviarPush(mensagem, mensagem.token);
    if (result) {
        resposta.send("Mensagem enviada com sucesso.");
    } else {
        resposta.send("Erro ao enviar mensagem.");
    }
});

function enviarPush(msg, deviceId) {
    var sucesso = true;
    if (sucesso) {
        return true;
    } else {
        return false;
    }
}

app.listen(1000)
console.log("Listening on localhost:1000...");