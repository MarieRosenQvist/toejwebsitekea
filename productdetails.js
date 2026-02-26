const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

fetch(url)
  .then(response => response.json())
  .then(data => showProduct(data));

function showProduct(product) {
  const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  document.querySelector(".product-page").innerHTML = `
    <div class="image-section">
      <img src="${imagePath}" alt="${product.productdisplayname}">
    </div>

    <div class="info-section">
      <h1>${product.productdisplayname}</h1>
      <p class="brand">${product.brandname}</p>
      <p class="price">${product.price} kr.</p>
      <p>${product.description}</p>
      <button class="btn">Add to basket</button>
    </div>
  `;
}