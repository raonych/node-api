const Sequelize = require("sequelize");

const con = new Sequelize("bdTeste", "root", "",{
    host: "localhost",
    dialect: "mysql",
});

/*
con.authenticate().then(function(){
    console.log("conexão realizada com sucesso");

}).catch(function(err){
    console.log("Erro ao conectar com o banco de dados" + err);
})
*/

const postagem = con.define("postagens",{
    titulo: {
        type: Sequelize.STRING,
    },
    conteudo:{
      type: Sequelize.TEXT,  
    },
})


//postagem.sync({force: true});