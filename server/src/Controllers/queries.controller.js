const express = require("express");

const router = express.Router();
const Queries = require("../Models/queries.model");

router.get("/allQueries", async (req, res) => {
    const queries = await Queries.find().lean().exec();
    return res.status(201).json({ message: "all queries", queries })
})

router.post("/", async (req, res) => {
    const query = await Queries.create(req.body);
    return res.status(201).json({ message: "query successfully posted", query })
})

module.exports = router;