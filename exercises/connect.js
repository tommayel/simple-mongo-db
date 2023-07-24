const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const connect = (url) => {
  console.log("connect.js: url=" + url);
  return mongoose.connect(url);
};

module.exports = connect;
