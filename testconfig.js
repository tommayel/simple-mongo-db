const mongoose = require("mongoose");
const cuid = require("cuid");
const connect = require("./exercises/connect");
const url = "mongodb://localhost:27017/intro-mongodb-testing"; //process.env.NODE_APP_MONGO_URL;

global.newId = () => {
  return mongoose.Types.ObjectId();
};

beforeEach((done) => {
  const db = cuid();
  async function clearDB() {
    for (var i in mongoose.connection.collections) {
      mongoose.connection.collections[i].deleteOne(() => true);
    }
  }

  if (mongoose.connection.readyState === 0) {
    try {
      connect(url + db)
        .then(() => clearDB())
        .then(() => done());
    } catch (e) {
      throw e;
    }
  } else {
    clearDB().then(() => done());
  }
});
afterEach((done) => {
  mongoose.disconnect().then(() => done());
});
afterAll((done) => {
  done();
});
