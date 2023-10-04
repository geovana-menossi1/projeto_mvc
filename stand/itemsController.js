// const app = require("../startup")
// const ItemModel = require("../mvc/models/itemsModel")
// const path = require("path")
// // app.get("/getItems", (req,res) =>{
// //     res.send("Items sent")
// // })

// // app.get("/", (req,res) =>{
// //     res.send("Home")
// // })

// app.get("/getItem", (req,res) =>{
//     const item = ItemModel

//     item.name = "Car"
//     item.description = "Blue Porsche"

//     res.json(item.toJSON())
// })

// app.get("/", (req,res) =>{
//     res.sendFile(path.resolve("mvc/views/stand/itemsView.html"))