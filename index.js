const express = require("express");
const rummersRouter = require("./routes/rumorsRoute");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose"); //including mongoose

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send(" you are on the home page");
});

mongoose
  .connect("mongodb://localhost:27017/rumourDB")
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log(err));

app.get("/users", (req, res) => {
  res.json([
    {
      name: "abebe",
      age: "25",
      position: "software developer",
    },
    {
      name: "kebede",
      age: "26",
      position: "public health officer",
    },
  ]);
});

app.use("/rumors", rummersRouter);

app.listen(5000, () => {
  console.log("The servier is running on port 5000");
});
