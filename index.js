const url = "https://kea-alt-del.dk/t7/api/categories";

fetch(url)
  .then(response => response.json())
  .then(data => showCategories(data));

function showCategories(categories) {

  const container = document.querySelector(".container");

  container.innerHTML = "";

  categories.forEach(category => {

    const name = category.category === "Free Items"
      ? "Mærkevarer"
      : category.category;

    container.innerHTML += `
      <a href="productlist.html?category=${category.category}" class="card">
        ${name}
      </a>
    `;
  });

}