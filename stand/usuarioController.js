// const app = require("../startup")
// const UsuarioModel = require("../mvc/models/UsuarioModel")
// const path = require("path")

// app.get("/getUsuario", (req,res) =>{
//     const usuario = new UsuarioModel("Marilda","marilda@ig.com", "32168465", 80)

//     const retorno = {
//         "nome":usuario.nome,
//         "email":usuario.email
//     }
//     res.json(retorno)
// })

// app.get("/", (req,res) =>{
//     res.sendFile(path.resolve("mvc/views/stand/itemsView.html"))
// })