const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const { stringify } = require("uuid");

require("dotenv").config();
const url = process.env.mongoURL;

// const url="mongodb://localhost:27017/people"
mongoose.connect(url).then(() => {
    console.log("connection success");
  }) 
  .catch((err) => console.log(err));
  