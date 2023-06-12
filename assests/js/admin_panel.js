const tbody = document.querySelector(".tbody");

fetch("http://localhost:5000/itemsData")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      tableData(element);
    });
  });

function tableData(data) {
  const tr = document.createElement("tr");
  const img = document.createElement("img");
  const gender = document.createElement("td");
  const name = document.createElement("td");
  const type = document.createElement("td");
  const price = document.createElement("td");
  const edit = document.createElement("td");
  const del = document.createElement("td");

  img.setAttribute("src", data.productImg);
  gender.innerText = data.gender;
  name.innerText = data.productName;
  type.innerText = data.productType;
  price.innerText = data.productPrice;

  del.innerText = "Del";
  del.style.color = "red";
  del.style.cursor = "pointer";

  edit.innerText = "Edit";
  edit.style.color = "green";
  edit.style.cursor = "pointer";



  del.onclick = () => {
    del.parentElement.remove();
 
    fetch("http://localhost:5000/itemsData/" + data.id, { method: "Delete"})
      .then((res) => res.json())
      .then(
        fetch("http://localhost:5000/itemsData", {
          method: "Get",
        })
          .then((res) => res.json())
          .then(tableData())
      );
  };

  tbody.appendChild(tr);
  tr.append(img, gender, name, type, price, edit, del);
}
