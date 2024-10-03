const express = require("express")//para usar o express
const server = express()// para criar um servidor
const categorias = require("./src/categorias.json")
server.get("/", (req, res) =>{
    return res.json({mensagem:"salve"})
})

server.get("/categorias", (req, res) =>{
    return res.json(categorias)
})

server.listen(1910, () => {
    console.log("funcionando")
})