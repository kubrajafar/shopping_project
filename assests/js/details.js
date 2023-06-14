const details_card = document.querySelector(".details-card");

let basket_arr = [];
let wishlist_arr = [];

window.onload = function () {
  if (localStorage.getItem("basket") !== null) {
    basket_arr = JSON.parse(localStorage.getItem("basket"));
  }
  if (localStorage.getItem("wishlist") !== null) {
    wishlist_arr = JSON.parse(localStorage.getItem("wishlist"));
  }
};

fetch("http://localhost:3000/itemsData/" + window.location.hash.slice(1))
  .then((res) => res.json())
  .then((data) => {
    detailsData(data);
  });

function detailsData(data) {
  const details_img = document.createElement("img");
  const details_content = document.createElement("div");
  const product_detail_name = document.createElement("h3");
  const product_detail_price = document.createElement("h2");
  const product_detail_about = document.createElement("p");
  const product_detail_type = document.createElement("p");

  const product_sizeBox = document.createElement("div");
  const product_sizes = document.createElement("div");
  const product_size_text = document.createElement("h3");
  const product_size_one = document.createElement("button");
  const product_size_two = document.createElement("button");
  const product_size_three = document.createElement("button");
  const product_size_four = document.createElement("button");
  const product_size_five = document.createElement("button");

  const card_btns = document.createElement("div");
  const wishlist_btn = document.createElement("div");
  const basket_btn = document.createElement("div");

  card_btns.classList.add("card_btns");
  wishlist_btn.classList.add("wishlist-btn");
  basket_btn.classList.add("basket-btn");

  wishlist_btn.innerHTML = `<i class="fa-regular fa-heart"></i>`;
  basket_btn.innerHTML = `<i class="fa-solid fa-cart-plus"></i>`;

  if (wishlist_arr.find((x) => x.id == data.id) !== undefined) {
    wishlist_btn.innerHTML = `<i class="fa-solid fa-heart"></i>`;
  }

  if (basket_arr.find((x) => x.id == data.id) !== undefined) {
    console.log(basket_btn);
    basket_btn.children[0].style.color = "#10c610";
  }

  // basket
  basket_btn.onclick = function () {
    if (basket_arr.find((x) => x.id == data.id) === undefined) {
      basket_arr.push({ ...data, count: 1 });
      basket_btn.children[0].style.color = "#10c610";
    } else {
      basket_arr = basket_arr.filter((x) => x.id !== data.id);
      basket_btn.children[0].style.color = "#a3a9a3";
    }
    localStorage.setItem("basket", JSON.stringify(basket_arr));
  };

  // wishlist

  wishlist_btn.onclick = () => {
    if (wishlist_arr.find((x) => x.id == data.id) === undefined) {
      wishlist_arr.push(data);
      wishlist_btn.innerHTML = `<i class="fa-solid fa-heart"></i>`;
    } else {
      wishlist_arr = wishlist_arr.filter((x) => x.id !== data.id);
      wishlist_btn.innerHTML = `<i class="fa-regular fa-heart"></i>`;
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlist_arr));
  };

  product_size_text.innerText = "Size";
  product_size_one.innerText = "S";
  product_size_two.innerText = "M";
  product_size_three.innerText = "L";
  product_size_four.innerText = "XL";
  product_size_five.innerText = "XXL";

  details_img.classList.add("details-img");
  details_content.classList.add("details-content");
  product_detail_name.classList.add("product_detail_name");
  product_detail_price.classList.add("product_detail_price");
  product_detail_about.classList.add("product_detail_about");
  product_detail_type.classList.add("product_detail_type");
  product_sizes.classList.add("product_sizes");

  details_img.setAttribute("src", data.productImg);
  product_detail_name.innerText = data.productName;
  product_detail_price.innerText = data.productPrice;
  product_detail_type.innerText = "Category : " + data.productType;
  product_detail_about.innerText = data.productAbout;

  card_btns.append(wishlist_btn, basket_btn);
  product_sizes.append(
    product_size_one,
    product_size_two,
    product_size_three,
    product_size_four,
    product_size_five
  );
  product_sizeBox.append(product_size_text, product_sizes);
  details_content.append(
    product_detail_name,
    product_detail_price,
    product_detail_type,
    product_sizeBox,
    product_detail_about,
    card_btns
  );
  details_card.append(details_img, details_content);
}
