const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const connect = mongoose.connect;

module.exports = connect;
