const express = require("express");
const mongoose = require("mongoose");
const musicRoute = require("./router/music");
const dotenv = require("dotenv");

const cors = require("cors");
dotenv.config();
// app must be declared on the top
app = express();
app.use(cors());
app.use(express.json());
app.use("/", musicRoute);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err, "error");
  });
const port = process.env.PORT;
app.listen(port, 3001, () => {
  console.log(`server running on port ${port}`);
});
