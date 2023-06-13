const submitForm = document.querySelector(".submit-form");

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
    productImg: img.value,
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

  stock.value = "";
  gender.value = "";
  type.value = "";
  img.value = "";
  Name.value = "";
  price.value = "";
  about.value = "";
});
