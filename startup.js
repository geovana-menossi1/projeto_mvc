const express = require('express')

const app = express()

app.listen(3000, () => console.log("Online Server at port 3000"))

module.exports = app

const itemsController = require('./mvc/controllers/itemsController')
const skinsController = require('./mvc/controllers/skinsController')
const usuarioController = require('./mvc/controllers/usuarioController')