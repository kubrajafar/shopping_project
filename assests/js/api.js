let cards_slider = document.querySelector(".cards-slider");

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
  cards_slider.append(slider_card);
}

async function dataCard() {
  const res = await fetch("http://localhost:5000/itemsData");
  const post = await res.json();
  const data = post;

  for (const i in data) {
    data[i].forEach((element) => {
      cardsData(element);
      console.log(element);
    });
  }

  $(".cards-slider").slick({
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  });
}

dataCard();
