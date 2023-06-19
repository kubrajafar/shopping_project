const submitForm = document.querySelector(".submit-form");

const left_menu_hamburger = document.querySelector(".left-menu-hamburger");
const adminPanel_left_menu = document.querySelector(".adminPanel-left-menu");

left_menu_hamburger.addEventListener("click", () => {
  adminPanel_left_menu.classList.toggle("active-left-menu");
});

const stock = document.querySelector("#stock");
const gender = document.querySelector("#gender");
const type = document.querySelector("#type");
const img = document.querySelector("#img");
const Name = document.querySelector("#name");
const price = document.querySelector("#price");
const about = document.querySelector("#about");

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const obj = {
    stock: stock.value,
    gender: gender.value,
    productType: type.value,
    productImg: "http://localhost:3000/" + img.value,
    productName: Name.value,
    productPrice: price.value,
    productAbout: about.value,
  };

  fetch("http://localhost:3000/itemsData", {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  console.log(obj);
  stock.value = "";
  gender.value = "";
  type.value = "";
  img.value = "";
  Name.value = "";
  price.value = "";
  about.value = "";
});
