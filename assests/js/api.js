let cards_slider = document.querySelector(".cards-slider");
const search_input = document.querySelector(".search-input");

const shirt = document.querySelector("#shirt");
const handbag = document.querySelector("#handbag");
const shoes = document.querySelector("#shoes");
const accessories = document.querySelector("#accessories");

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

async function dataCard() {
  const res = await fetch("http://localhost:5000/itemsData");
  const post = await res.json();
  const data = post;

  data.forEach((element) => {
    cardsData(element);
  });

  $(".cards-slider").slick({
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  });

  search_input.addEventListener("keyup", (e) => {
    const boxes = document.querySelectorAll(".slider-card");
    console.log(boxes);
    for (let i = 0; i < boxes.length; i++) {
      for (const i in data) {
        data[i].forEach((element) => {
          console.log(boxes[i]);
          if (
            element.productType
              .toLowerCase()
              .includes(search_input.value.toLowerCase())
          ) {
            console.log(element.productType);
            boxes[i].style.display = "flex";
          } else {
            boxes[i].style.display = "none";
          }
        });
      }
    }
  });
}

function cardsData(data) {
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

  img_btn_link.href = "./details.html#" + data.id;
  name_btn_link.href = "./details.html#" + data.id;

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

  card_img.setAttribute("src", data.productImg);
  card_product_name.innerText = data.productName;
  card_product_price.innerText = data.productPrice;
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



  card_btns.append(wishlist_btn, basket_btn);
  name_btn_link.append(card_product_name, card_product_price);
  card_content.append(name_btn_link, card_btns);
  img_btn_link.append(card_img);
  slider_card.append(img_btn_link, card_content);
  cards_slider.append(slider_card);
}

dataCard();
