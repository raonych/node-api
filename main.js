const express = require("express");
const rotas = express();

const Sequelize = require("sequelize"); 

const con = new Sequelize("DiarioBordo", "root", "",{
    host: "localhost",
    dialect: "mysql",
});


const Usuario = con.define("usuarios",{
    user_nome:{
        type: Sequelize.STRING,
    },
    user_email:{
        type: Sequelize.STRING,
    },
    user_senha:{
        type: Sequelize.STRING,
    }
})


const Categorias = con.define("categorias",{
    ctg_titulo: {
        type: Sequelize.STRING,
    }
})
const Entradas = con.define("entradas",{
    entr_titulo: {
        type: Sequelize.STRING,
    },
    entr_conteudo: {
        type: Sequelize.STRING,
    },
    entr_time: {
        type: Sequelize.TIME,
    },
    entr_date: {
        type: Sequelize.DATE
    }
})
const Lembrete = con.define("categorias",{
    lembrete_titulo: {
        type: Sequelize.STRING,
  },
  lembrete_msg:{
    type: Sequelize.STRING,
  },
  lembrete_time: {
        type: Sequelize.TIME,
    },
    lembrete_date: {
        type: Sequelize.DATE
    }
})
const Backup = con.define("backup",{
    hora: {
        type: Sequelize.TIME,
    },
    data:{
        type: Sequelize.DATE
    },
})

/*
Usuario.sync({ force: true});
Backup.sync({ force: true});
Lembrete.sync({ force: true});
Entradas.sync({ force: true});
Categorias.sync({ force: true});
*/

con.authenticate().then(function(){
    console.log("conexão realizada com sucesso");

}).catch(function(err){
    console.log("Erro ao conectar com o banco de dados" + err);
})



rotas.get("/", function(req, res){
    res.send("Rota Principal");
});

rotas.get("/login/:user_nome/:user_email/:user_senha", async function(req, res){
    const {user_nome,user_email,user_senha} = req.params; //Guarda os parametros em variaveis

    const novoUsuario = await Usuario.create({user_nome,user_email,user_senha});// insert

    res.json({
        resposta: "Usuário cadastrado com sucesso", 
        usuario: novoUsuario
    })
});



rotas.listen(3001, function () {
    console.log("Server is running on port 3001");
  });