const tbody = document.querySelector(".tbody");
const left_menu_hamburger = document.querySelector(".left-menu-hamburger");
const adminPanel_left_menu = document.querySelector(".adminPanel-left-menu");

left_menu_hamburger.addEventListener("click", () => {
  adminPanel_left_menu.classList.toggle("active-left-menu");
});

fetch("http://localhost:3000/itemsData")
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
  const stock = document.createElement("td");
  const edit = document.createElement("td");
  const del = document.createElement("td");

  img.setAttribute("src", data.productImg);
  // console.log(img);
  gender.innerText = data.gender;
  name.innerText = data.productName;
  type.innerText = data.productType;
  price.innerText = data.productPrice;
  stock.innerText = data.stock;
  del.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  del.style.color = "red";
  del.style.cursor = "pointer";

  edit.innerHTML = `<i class="fa-sharp fa-solid fa-pen-to-square"></i>`;
  edit.style.color = "green";
  edit.style.cursor = "pointer";

  tbody.appendChild(tr);
  tr.append(img, gender, name, type, price, stock, edit, del);

  del.onclick = () => {
    del.parentElement.remove();

    fetch("http://localhost:3000/itemsData/" + data.id, { method: "Delete" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
}
