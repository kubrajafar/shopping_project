const details_card = document.querySelector(".details-card");
fetch("http://localhost:5000/itemsData/" + window.location.hash.slice(1))
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

  details_img.classList.add("details-img");
  details_content.classList.add("details-content");
  product_detail_name.classList.add("product_detail_name");
  product_detail_price.classList.add("product_detail_price");
  product_detail_about.classList.add("product_detail_about");
  product_detail_type.classList.add("product_detail_type");

  details_img.setAttribute("src", data.peoductImg);
  product_detail_name.innerText = data.productName;
  product_detail_price.innerText = data.productPrice;
  product_detail_type.innerText = data.productType;
  product_detail_about.innerText = data.productAbout;

  details_content.append(
    product_detail_name,
    product_detail_price,
    product_detail_type,
    product_detail_about
  );
  details_card.append(details_img, details_content);
}
