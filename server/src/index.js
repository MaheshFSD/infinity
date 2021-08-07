const express = require('express')
const connect = require('./Config/db')
const PORT = process.env.PORT || 2244

const app = express()
app.use(express.json())


const cors = require("cors");
app.use(cors());



const usersController = require('./Controllers/users.controller')

app.use("/users", usersController)


app.listen(PORT, async () => {
    await connect()
    console.log(`Server started at ${PORT} Port`)
})