const express = require("express");
const data = require("./data.js");

const cors = require("cors");

const app = express();
app.use(express.static("public"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("main page");
});

app.get("/itemsData", (req, res) => {
  res.json(data);
});

app.get("/itemsData/:id", (req, res) => {
  const  {id}  = req.params;

  data.find((dat) => dat.id === req.params.id);
  res.json(data[+id - 1]);

});


app.listen(5000, () => {
  console.log(`http://localhost:5000 adresinden gelen istekler `);
});
