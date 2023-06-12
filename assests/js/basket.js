const basket_container = document.querySelector(".basket-cardsBox");
const h2 = document.querySelector("h2");
let basket_arr = [];

basket_arr = JSON.parse(localStorage.getItem("basket"));
getTotal();

basket_arr.forEach((element) => {
  const slider_card = document.createElement("div");
  const card_img = document.createElement("img");
  const card_content = document.createElement("div");
  const card_product_name = document.createElement("p");
  const card_product_price = document.createElement("h4");
  const basket_btn = document.createElement("button");

  const img_btn_link = document.createElement("a");
  const name_btn_link = document.createElement("a");

  const productElement = document.createElement("div");
  const productQuantity = document.createElement("div");
  const productInc = document.createElement("button");
  const productTotal = document.createElement("p");
  const productDec = document.createElement("button");
  const productDel = document.createElement("div");

  productInc.innerHTML = "+";
  productTotal.innerHTML = element.count;
  productDec.innerHTML = "-";
  productDel.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;

  productInc.onclick = () => {
    productTotal.innerHTML++;

    basket_arr[basket_arr.findIndex((x) => element.id === x.id)].count++;
    localStorage.setItem("basket", JSON.stringify(basket_arr));
    getTotal();
  };

  productDec.onclick = () => {
    if (productTotal.innerHTML === "1") {
      return;
    }
    productTotal.innerHTML--;

    basket_arr[basket_arr.findIndex((x) => element.id === x.id)].count--;

    localStorage.setItem("basket", JSON.stringify(basket_arr));
    getTotal();
  };

  productDel.onclick = () => {
    basket_arr = basket_arr.filter((x) => x.id !== element.id);
    localStorage.setItem("basket", JSON.stringify(basket_arr));
    getTotal();

    slider_card.remove();
  };

  img_btn_link.href = "./details.html#" + element.id;
  name_btn_link.href = "./details.html#" + element.id;

  slider_card.classList.add("slider-card");
  img_btn_link.classList.add("img-link");
  card_img.classList.add("card-img");
  card_content.classList.add("card-content");
  name_btn_link.classList.add("name-link");
  card_product_name.classList.add("card-product-name");
  card_product_price.classList.add("card-product-price");
  productElement.classList.add("basket-property");
  productQuantity.classList.add("product-quantity");

  card_img.setAttribute("src", element.productImg);
  card_product_name.innerText = element.productName;
  card_product_price.innerText = element.productPrice;

  productQuantity.append(productDec, productTotal, productInc);
  productElement.append(productQuantity, productDel);
  name_btn_link.append(card_product_name, card_product_price);
  img_btn_link.append(card_img);
  card_content.append(name_btn_link, productElement);
  slider_card.append(img_btn_link, card_content);
  basket_container.append(slider_card);
});

function getTotal() {
  h2.innerHTML = basket_arr.reduce(
    (sum, prev) => sum + prev.productPrice.substring(1) * prev.count,
    0
  );
}
