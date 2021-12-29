// usei o express para criar e configurar o meu servidor
const express = require("express")
const server = express()

// configuração dos arquivos estáticos
server.use(express.static("public"))

//configuração do nunjcks
const nunjcks = require("nunjucks")
nunjcks.configure("views",{
    express: server,
    noCache: true, //boolean
})

// criei uma rota /
// e capturo o pedido do cliente para responder 
server.get("/", function(req, res){
    return res.render("index.html")
})
server.get("/ideias", function(req, res){
    return res.sendFile(__dirname + "ideias.html")
})

// liguei meu servidor na porta 3000
server.listen(3000)

