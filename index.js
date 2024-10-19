/*var http = require("http");

http.createServer(function (req, res) {
    res.end("Hello World");
  }).listen(3300);

console.log("Server is running on port 3300");*/

//Criando uma variável com os poderes de Express que é um gerenciador de rotas
const express = require("express");
const {create} = require("express-handlebars");  
//Clonando a varável com poderes de express para manipular
const app = express();

//ROTAS:
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/teste", function (req, res) {
  res.send("Hello Teste");
});

app.get("/login/:email/:senha", function (req, res) {
    res.send(req.params.email);
  });

app.get("/htmlteste", function (req,res){
  res.sendFile(__dirname + "/templates/index.html");
});

app.get("/cad", function(req,res){
  res.render("form");
});

//template Engine
const abs = create({deaultLayout: "main"});
app.engine("handlebars", abs.engine);
app.set("view engine", "handlebars");


//SEMPRE MANTENHA NO FINAL DO CÓDIGO JJ
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});