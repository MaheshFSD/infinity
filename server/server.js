const express = require('express')
const app = express()
const connect = require('./src/Config/db')

const server = require("http").createServer(app);

const PORT = process.env.PORT || 5000

app.use(express.json())


const cors = require("cors");
app.use(cors());



const usersController = require('./src/Controllers/users.controller')

app.use("/users", usersController)


server.listen(PORT, async () => {
    await connect()
    console.log(`Server started at ${PORT} Port`)
})