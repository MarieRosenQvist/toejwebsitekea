const params = new URLSearchParams(window.location.search);
const category = params.get("category");

const url = `https://kea-alt-del.dk/t7/api/products?category=${category}&limit=20`;

fetch(url)
  .then(response => response.json())
  .then(data => showProducts(data));

function showProducts(products) {
  const container = document.querySelector(".products");

products.forEach(product => {
  const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  const isSoldOut = product.soldout ? "soldout" : "";
  const saleBadge = product.discount ? `<span class="badge sale">Sale</span>` : "";
  const soldBadge = product.soldout ? `<span class="badge sold">Sold Out</span>` : "";

  container.innerHTML += `
    <a href="productdetails.html?id=${product.id}" class="product ${isSoldOut}">
      ${saleBadge}
      ${soldBadge}
      <img src="${imagePath}" alt="${product.productdisplayname}">
      <h2>${product.productdisplayname}</h2>
      <p class="brand">${product.brandname}</p>
      <p class="price">${product.price} kr.</p>
    </a>
  `;
});
}