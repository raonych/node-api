const express = require("express")//para usar o express
const server = express()// para criar um servidor
const categorias = require("./src/categorias.json")
const users = require(".src/users.json")
server.get("/", (req, res) =>{
    return res.json({mensagem:"salve"})
})

server.get("/categorias", (req, res) =>{
    return res.json(categorias)
})
server.get("/users", (req, res) =>{
    return res.json(users)
})

server.listen(1910, () => {
    console.log("funcionando")
})