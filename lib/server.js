const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
  res.json({message: "Welcome"});
})


app.listen(port, () => {
  console.log(`Fizzbuzz API in localhost ${port}`);
})