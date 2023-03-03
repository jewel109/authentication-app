const mongoose = require("mongoose")

async function connectingDB() {
  try {
    mongoose.connect("mongodb://localhost:27017/mern-auth");
    console.log("db running")
  } catch (err) {
    console.error(err)
  }

}

module.exports = connectingDB
