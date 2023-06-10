let shopPage_container = document.querySelector(".shopPage-container");
const circleBox = document.querySelector(".circleBox");
let cricleBoxChildren = circleBox.children;

function cardsData(data) {
  const slider_card = document.createElement("div");
  const card_img = document.createElement("img");
  const card_content = document.createElement("div");
  const card_product_name = document.createElement("p");
  const card_product_price = document.createElement("h4");
  const card_btns = document.createElement("div");

  const wishlist_btn = document.createElement("div");
  const basket_btn = document.createElement("div");

  slider_card.classList.add("slider-card");
  card_img.classList.add("card-img");
  card_content.classList.add("card-content");
  card_product_name.classList.add("card-product-name");
  card_product_price.classList.add("card-product-price");
  card_btns.classList.add("card-btns");
  wishlist_btn.classList.add("wishlist-btn");
  basket_btn.classList.add("basket-btn");

  card_img.setAttribute("src", data.peoductImg);
  card_product_name.innerText = data.productName;
  card_product_price.innerText = data.productPrice;

  wishlist_btn.innerHTML = `<i class="fa-regular fa-heart"></i>`;
  basket_btn.innerHTML = `<i class="fa-solid fa-cart-plus"></i>`;

  card_btns.append(wishlist_btn, basket_btn);
  card_content.append(card_product_name, card_product_price, card_btns);
  slider_card.append(card_img, card_content);
  shopPage_container.append(slider_card);
}


async function klikBtn() {
  await fetch("http://localhost:5000/itemsData")
    .then((res) => res.json())
    .then((data) => {
      let DataResult = data.men;
  
      let result = DataResult.length / 12 - 1;
 
      for (let i = 0; i < result; i++) {
        result * circleAdd();
      }

      for (let i = 0; i < 12; i++) {
        cardsData(DataResult[i]);

      }

      for (let i = 0; i < cricleBoxChildren.length; i++) {
        cricleBoxChildren[i].addEventListener("click", (e) => {
          let targetDiv = +e.target.id * 12;
          shopPage_container.innerHTML = "";
          for (let j = targetDiv; j < targetDiv + 12; j++) {
            DataResult[j] ? cardsData(DataResult[j]) : null;
          }
        });
      }
    });

  for (let i = 0; i < cricleBoxChildren.length; i++) {
    cricleBoxChildren[i].addEventListener("click", () => {
      for (let i = 0; i < cricleBoxChildren.length; i++) {
        cricleBoxChildren[i].classList.remove("activeBtn");
      }
      cricleBoxChildren[i].classList.add("activeBtn");
    });
  }
}
function circleAdd() {
  const btn = document.createElement("button");

  btn.id = circleBox.children.length;

  circleBox.append(btn);
}
klikBtn();
