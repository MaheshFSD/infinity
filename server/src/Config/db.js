const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect('mongodb+srv://VivekRanjan:hack@cluster0.diwbg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    });
}

module.exports = connect