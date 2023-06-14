let shopPage_container = document.querySelector(".shopPage-container");
const circleBox = document.querySelector(".circleBox");
let cricleBoxChildren = circleBox.children;

const shirt = document.querySelector("#shirt");
const handbag = document.querySelector("#handbag");
const shoes = document.querySelector("#shoes");
const accessories = document.querySelector("#accessories");

let basket_arr = [];
let wishlist_arr = [];

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

  card_img.setAttribute("src", data?.productImg);
  card_product_name.innerText = data?.productName;
  card_product_price.innerText = data?.productPrice;

  slider_card.setAttribute("data-type", data?.productType);

  wishlist_btn.innerHTML = `<i class="fa-regular fa-heart"></i>`;
  basket_btn.innerHTML = `<i class="fa-solid fa-cart-plus"></i>`;

  if (wishlist_arr.find((x) => x.id == data?.id) !== undefined) {
    wishlist_btn.innerHTML = `<i class="fa-solid fa-heart"></i>`;
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

  card_btns.append(wishlist_btn, basket_btn);
  card_content.append(card_product_name, card_product_price, card_btns);
  slider_card.append(card_img, card_content);
  shopPage_container.append(slider_card);
}

async function klikBtn() {
  await fetch("http://localhost:3000/itemsData")
    .then((res) => res.json())
    .then((data) => {
      let DataResult = [];

      for (let i = 0; i < data.length; i++) {
        if (data[i].gender === "women") {
          DataResult.push(data[i]);
        }
      }

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

window.onload = function () {
  if (localStorage.getItem("basket") !== null) {
    basket_arr = JSON.parse(localStorage.getItem("basket"));
  }
  if (localStorage.getItem("wishlist") !== null) {
    wishlist_arr = JSON.parse(localStorage.getItem("wishlist"));
  }
};

shirt.addEventListener("click", () => {
  const boxes = document.querySelectorAll(".slider-card");
  boxes.forEach((element) => {
    if (element.getAttribute("data-type") === "shirt") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
handbag.addEventListener("click", () => {
  const boxes = document.querySelectorAll(".slider-card");
  boxes.forEach((element) => {
    if (element.getAttribute("data-type") === "bag") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
shoes.addEventListener("click", () => {
  const boxes = document.querySelectorAll(".slider-card");
  boxes.forEach((element) => {
    if (element.getAttribute("data-type") === "shoes") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
accessories.addEventListener("click", () => {
  const boxes = document.querySelectorAll(".slider-card");
  boxes.forEach((element) => {
    if (element.getAttribute("data-type") === "accessories") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
