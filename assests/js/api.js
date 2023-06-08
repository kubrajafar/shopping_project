const cards_slider = document.querySelector(".cards-slider");

fetch("http://localhost:3000/data")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      cardsData(element);
    });
  });

function cardsData(data) {
  const slider_card = document.createElement("div");
  const card_img = document.createElement("img");
  const card_content = document.createElement("div");
  const card_product_name = document.createElement("p");
  const card_product_price = document.createElement("h4");

  card_img.classList.add("card-img");
  card_content.classList.add("card-content");
  card_product_name.classList.add("card-product-name");
  card_product_price.classList.add("card-product-price");

  card_img.setAttribute("src", data.peoductImg);
  card_product_name.innerText = data.productName;
  card_product_price.innerText = data.productPrice;

  card_content.append(card_product_name, card_product_price);
  slider_card.append(card_img, card_content);
}
