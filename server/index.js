const cors = require('cors')
const express = require('express')
const app = express()
const IntervalosConfianzaRoutes = require('./routes/IntervalosConfianzaRoutes')

require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use(IntervalosConfianzaRoutes)

const server = app.listen(process.env.PORT, () => {
    console.log('Servidor escuchando en el puerto: ' + process.env.PORT)
})