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
  const { id } = req.params;
  const item = data.find((itemData) => {
    itemData.id === parseInt(id);
    if (item) {
      res.status(200).json(item);
    } else {
      res.status(404).send("tapilmadi");
    }
  });
});

app.listen(5000, () => {
  console.log(`http://localhost:5000 adresinden gelen istekler `);
});
