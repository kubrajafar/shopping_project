const wishlist_container = document.querySelector(".full-wishlist");
let wishlist_arr = [];
let basket_arr = [];

wishlist_arr = JSON.parse(localStorage.getItem("wishlist"));

wishlist_arr.forEach((element) => {
  const slider_card = document.createElement("div");
  const card_img = document.createElement("img");
  const card_content = document.createElement("div");
  const card_product_name = document.createElement("p");
  const card_product_price = document.createElement("h4");
  const card_btns = document.createElement("div");
  const img_btn_link = document.createElement("a");
  const name_btn_link = document.createElement("a");
  const wishlist_btn = document.createElement("div");
  const basket_btn = document.createElement("div");

  img_btn_link.href = "./details.html#" + element.id;
  name_btn_link.href = "./details.html#" + element.id;

  slider_card.classList.add("slider-card");
  img_btn_link.classList.add("img-link");
  card_img.classList.add("card-img");
  card_content.classList.add("card-content");
  name_btn_link.classList.add("name-link");
  card_product_name.classList.add("card-product-name");
  card_product_price.classList.add("card-product-price");
  card_btns.classList.add("card-btns");
  wishlist_btn.classList.add("wishlist-btn");
  basket_btn.classList.add("basket-btn");

  card_img.setAttribute("src", element.productImg);
  card_product_name.innerText = element.productName;
  card_product_price.innerText = element.productPrice;

  wishlist_btn.innerHTML = `<i class="fa-solid fa-heart"></i>`;

  basket_btn.innerHTML = `<i class="fa-solid fa-cart-plus"></i>`;

  wishlist_btn.onclick = () => {
    console.log(element.id);
    wishlist_arr = wishlist_arr.filter((x) => x.id !== element.id);
    localStorage.setItem("wishlist", JSON.stringify(wishlist_arr));
    slider_card.remove();
  };

  basket_btn.onclick = function () {
    if (basket_arr.find((x) => x.id == element.id) === undefined) {
      basket_arr.push({ ...element, count: 1 });
      basket_btn.children[0].style.color = "#10c610";
    } else {
      basket_arr = basket_arr.filter((x) => x.id !== element.id);
      basket_btn.children[0].style.color = "#a3a9a3";
    }
    localStorage.setItem("basket", JSON.stringify(basket_arr));
  };

  card_btns.append(wishlist_btn, basket_btn);
  name_btn_link.append(card_product_name, card_product_price);
  card_content.append(name_btn_link, card_btns);
  img_btn_link.append(card_img);
  slider_card.append(img_btn_link, card_content);
  wishlist_container.append(slider_card);
});
