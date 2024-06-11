require("dotenv").config()

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.CONNECTIONSTRING) //Conecta-se a base de dados
    .then(() => {
        app.emit("pronto"); //Emite o sinal
    })
    .catch((e) => console.log(e));

const routes = require("./routes");

app.use(express.json());
app.use(routes);

app.on("pronto", () => { //Captura o sinal
    app.listen(8000, () => { //Definir qual porta o servidor irá escutar as ações do cliente
        console.log("Servidor executando na porta 8000");
        console.log("Acesse http://localhost:8000");
    });
});

module.exports = app;