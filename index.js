const url = "https://kea-alt-del.dk/t7/api/categories";

fetch(url)
  .then(response => response.json())
  .then(data => showCategories(data));

function showCategories(categories) {
  const container = document.querySelector(".container");

categories.forEach(category => {
  container.innerHTML += `
    <a href="productlist.html?category=${category.category}" class="card">
      ${category.category}
    </a>
  `;
});
}