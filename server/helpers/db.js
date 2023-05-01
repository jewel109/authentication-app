const mongoose = require("mongoose");

async function connectingDB() {
  try {
    const { NODE_ENV } = process.env;
    if (NODE_ENV === "production") {
      mongoose.connect(
        "mongodb+srv://jewelrana176517:1234abu@cluster0.nobr86s.mongodb.net/?retryWrites=true&w=majority",
      );
    } else {
      mongoose.connect("mongodb://localhost:27017/mern-auth");
    }
    console.log("db running");
  } catch (err) {
    console.error(err);
  }
}

module.exports = connectingDB;
