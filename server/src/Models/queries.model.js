const mongoose = require("mongoose");

const queriesSchema = new mongoose.Schema({
    query: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    }
}, {
    versionKey: false,
    timestamps: true
});

const Queries = mongoose.model("query", queriesSchema);

module.exports = Queries;