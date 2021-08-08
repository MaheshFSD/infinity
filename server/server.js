const express = require('express')
const app = express()
const connect = require('./src/Config/db')

const server = require("http").createServer(app);

const PORT = process.env.PORT || 5000

app.use(express.json())


const cors = require("cors");
app.use(cors());

const io = require("socket.io")(server, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"]
	}
});


app.get('/', (req, res) => {
	res.send('Running');
});

io.on("connection", (socket) => {
	socket.emit("me", socket.id);

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	});

	socket.on("callUser", ({ userToCall, signalData, from, name }) => {
		io.to(userToCall).emit("callUser", { signal: signalData, from, name });
	});
	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	});
});



//Crud for Users Data

const usersController = require('./src/Controllers/users.controller')
app.use("/users", usersController)


server.listen(PORT, async () => {
	await connect()
	console.log(`Server started at ${PORT} Port`)
})
