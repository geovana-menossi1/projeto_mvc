const app = require("../../startup")
const SkinModel = require("../models/skinsModel")
const path = require("path")

app.get("/getSkin", (req,res) =>{
    const item = SkinModel

    item.name = "Chapéu"
    item.description = "Chapéu de palha roxo"

    res.json(item.toJSON())
})

app.get("/telaSkin", (req,res) =>{
    res.sendFile(path.resolve("mvc/views/stand/skinsView.html"))
})