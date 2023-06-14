// const express = require("express");
const products = require("./data.js");

// const app = express();

// app.get("/", (req, res) => {
//   res.send("main page");
// });

// app.get("/itemsData", (req, res) => {
//   res.json(data);
// });

// app.get("/", (req, res) => {
//   const { id } = req.params;

//   data.find((dat) => dat.id === req.params.id);
//   res.json(data[+id - 1]);
// });

// app.post("/itemsData/:id", (req, res) => {
//   const delIndex = data.findIndex(
//     (elem) => elem.id === parseInt(req.params.id)
//   );
//   console.log(delIndex);
//   data.splice(delIndex, 1);
//   console.log(data);

//   res.send(data);
//   // res.json(data);
// });

// app.delete("/itemsData/:id", (req, res) => {
//   const delIndex = data.findIndex(
//     (elem) => elem.id === parseInt(req.params.id)
//   );
//   console.log(delIndex);
//   data.splice(delIndex, 1);
//   console.log(data);

//   res.send(data);
//   // res.json(data);
// });

// app.listen(5000, () => {
//   console.log(`http://localhost:5000 adresi`);
// });

const express = require("express");
let bodyParser = require("body-parser");
const path = require("path");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(express.static("public"));
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());

// parse application/json
app.use(bodyParser.json());

// const products = [
//   {
//     id: 5,
//     supplierId: 2,
//     categoryId: 2,
//     quantityPerUnit: "36 boxes",
//     unitPrice: 21.35,
//     unitsInStock: 0,
//     unitsOnOrder: 0,
//     reorderLevel: 0,
//     discontinued: true,
//     name: "Chef Anton's Gumbo Mix",
//   },
//   {
//     id: 6,
//     supplierId: 3,
//     categoryId: 2,
//     quantityPerUnit: "12 - 8 oz jars",
//     unitPrice: 25,
//     unitsInStock: 120,
//     unitsOnOrder: 0,
//     reorderLevel: 25,
//     discontinued: false,
//     name: "Grandma's Boysenberry Spread",
//   },
//   {
//     id: 7,
//     supplierId: 3,
//     categoryId: 7,
//     quantityPerUnit: "12 - 1 lb pkgs.",
//     unitPrice: 30,
//     unitsInStock: 15,
//     unitsOnOrder: 0,
//     reorderLevel: 10,
//     discontinued: false,
//     name: "Uncle Bob's Organic Dried Pears",
//   },
// ];

app.get("/itemsData", (req, res) => {
  res.send(products);
});
app.get("/itemsData/:id", (req, res) => {
  const id = products.find((data) => data.id == req.params.id);
  res.json(id);
});

app.delete("/itemsData/:id", (req, res) => {
  const delIndex = products.findIndex(
    (data) => data.id === parseInt(req.params.id)
  );
  products.splice(delIndex, 1);
  res.send(products);
});

app.post("/itemsData", (req, res) => {
  products.push({ ...req.body, id: products.length + 1 });
  res.send({ ...req.body, id: products.length + 1 });
});

app.listen(3000, function () {
  console.log("listening on 3000");
});
