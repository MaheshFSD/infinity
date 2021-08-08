const express = require("express");

const router = express.Router();
const Users = require("../Models/users.model")

router.post("/register", async (req, res) => {
    const user = await Users.create(req.body);
    return res.status(201).json({ data: user })

})


router.post("/login", async (req, res) => {

    const { email, password } = await req.body;

    Users.findOne({ email: email }, (err, user) => {

        if (user) {
            if (password === user.password) {
                res.status(201).send({ message: "Login Successful", user: user, name: user.name })
            }
            else {
                res.send({ message: "Wrong Password" })
            }

        }
        else {
            res.send({ message: "User has not registered" })
        }


    })


})

router.get("/register", async (req, res) => {
    const users = await Users.find()

    return res.status(200).json({ data: users })
})

router.get("/register/:id", async (req, res) => {
    const user = await Users.findById(req.params.id);

    return res.status(200).json({ data: user })
})



module.exports = router;