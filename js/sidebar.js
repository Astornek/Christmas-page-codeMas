/// array itemów ///
const items = [
  {
    id: 1,
    productName: "Christmas Tree Decoration",
    productImageURL: "https://icodethis.com/images/iCodeMas/tree.png",
    price: 19.99,
    description:
      "Enhance your holiday ambiance with our stunning Christmas Tree Decoration. Meticulously crafted, this elegant ornament adds a festive touch to your space...",
    categories: ["Ornaments"],
    colors: ["Green"],
    sizes: ["Medium"],
  },
  {
    id: 2,
    productName: "Gift Box",
    productImageURL: "https://icodethis.com/images/iCodeMas/gift.png",
    price: 9.99,
    description:
      "Elevate the joy of giving with our delightful Gift Box ornament. Carefully designed, this charming decoration adds a festive flair to your celebrations...",
    categories: ["Accessories"],
    colors: ["Red", "White"],
    sizes: ["Medium"],
  },
  {
    id: 3,
    productName: "Gingerbrear Man Cookie",
    productImageURL:
      "https://icodethis.com/images/iCodeMas/gingerbread_cookie.png",
    price: 12.99,
    description:
      "Savor the sweetness of the season with our Gingerbread Man Cookie ornament. A delightful addition to your holiday decor...",
    categories: ["Cookies"],
    colors: ["Brown"],
    sizes: ["Small"],
  },
  {
    id: 4,
    productName: "Snowflake Decoration",
    productImageURL: "https://icodethis.com/images/iCodeMas/snowflake.png",
    price: 4.99,
    description:
      "Add a touch of winter magic to your holiday decor with our exquisite Snowflake Decoration. Crafted with attention to detail...",
    categories: ["Ornaments"],
    colors: ["White"],
    sizes: ["Small"],
  },
  {
    id: 5,
    productName: "Star-shaped Cookie",
    productImageURL: "https://icodethis.com/images/iCodeMas/star_cookie.png",
    price: 12.99,
    description:
      "Elevate your holiday decor with our Star-shaped Cookie ornament. This delightful decoration adds a sprinkle ...",
    categories: ["Cookies"],
    colors: ["Brown"],
    sizes: ["Small"],
  },
  {
    id: 6,
    productName: "Santa's Hat",
    productImageURL: "https://icodethis.com/images/iCodeMas/santa_hat.png",
    price: 39.99,
    description:
      "Top off your festive decorations with Santa's Hat ornament. This whimsical addition brings a jolly spirit to your holiday setting...",
    categories: ["Accessories"],
    colors: ["Red", "White"],
    sizes: ["Large"],
  },
  {
    id: 7,
    productName: "Christmas Tree Cookie",
    productImageURL: "https://icodethis.com/images/iCodeMas/tree_cookie.png",
    price: 13.99,
    description:
      "Add holiday charm with our Christmas Tree Cookie. Delicately crafted, it sweetens your decor. Hang it or use as a festive accent...",
    categories: ["Cookies"],
    colors: ["Brown"],
    sizes: ["Small"],
  },
  {
    id: 8,
    productName: "Candy Cane",
    productImageURL: "https://icodethis.com/images/iCodeMas/candy_cane.png",
    price: 8.99,
    description:
      "Indulge in holiday sweetness with our Candy Cane. Perfect for decor or a treat, its classic design adds festive flair. Spread joy...",
    categories: ["Candies"],
    colors: ["Red", "White"],
    sizes: ["Medium"],
  },
  {
    id: 9,
    productName: "Red Ribbon",
    productImageURL: "https://icodethis.com/images/iCodeMas/red_ribbon.png",
    price: 3.99,
    description:
      "Elevate your holiday gifts with the vibrant touch of our Red Ribbon. Wrap presents in style, creating a festive atmosphere...",
    categories: ["Ornaments"],
    colors: ["Red"],
    sizes: ["Small"],
  },
  {
    id: 10,
    productName: "Snowman Decoration",
    productImageURL: "https://icodethis.com/images/iCodeMas/snowman_deco.png",
    price: 39.99,
    description:
      "Bring joy to your space with our adorable Snowman Decoration. This delightful ornament captures the whimsy of winter...",
    categories: ["Accessories"],
    colors: ["White", "Red"],
    sizes: ["Large"],
  },
  {
    id: 11,
    productName: "Christmas Red Socks",
    productImageURL: "https://icodethis.com/images/iCodeMas/christmas_sock.png",
    price: 29.99,
    description:
      "Enhance your holiday decor with the charm of our Christmas Red Socks. Hang with care to infuse warmth and festive cheer into your home...",
    categories: ["Accessories"],
    colors: ["Red", "White"],
    sizes: ["Medium"],
  },
  {
    id: 12,
    productName: "Christman Ball",
    productImageURL: "https://icodethis.com/images/iCodeMas/christmas_ball.png",
    price: 4.99,
    description:
      "Enhance your festive ambiance with the Christmas Ball ornament. Its intricate design and vibrant colors bring joy to your holiday decor...",
    categories: ["Accessories"],
    colors: ["Red", "White"],
    sizes: ["Medium"],
  },
];
/// generowanie itemów ///
const productList = document.getElementById("product-list");

function addProduct(product) {
  const productItem = document.createElement("div");
  productItem.className = "item";

  const productImg = document.createElement("img");
  productImg.src = product.productImageURL;
  productItem.appendChild(productImg);

  const productInfo = document.createElement("div");
  productInfo.classList = "info";

  const productName = document.createElement("p");
  productName.className = "product-name";
  productName.textContent = product.productName;
  productInfo.appendChild(productName);

  const productPrice = document.createElement("p");
  productPrice.className = "price";
  productPrice.textContent = `$${product.price.toFixed(2)}`;
  productInfo.appendChild(productPrice);

  const productDescription = document.createElement("p");
  productDescription.className = "product-description";
  productDescription.textContent = product.description;
  productInfo.appendChild(productDescription);

  const addToCartButton = document.createElement("button");
  addToCartButton.className = "add-to-cart-btn";
  addToCartButton.textContent = "Add to Cart";

  const cartIcon = document.createElement("span");
  cartIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>`;

  addToCartButton.appendChild(cartIcon);
  productInfo.appendChild(addToCartButton);

  productItem.appendChild(productInfo);
  productList.appendChild(productItem);
}
items.forEach((product) => {
  addProduct(product);
});

// Pobieranie wszystkich checkboxów kategorii, kolorów i rozmiarów
const categoryCheckboxes = document.querySelectorAll(
  '.filters.category-fill input[type="checkbox"]'
);
const colorCheckboxes = document.querySelectorAll(
  '.filters.colors-fill input[type="checkbox"]'
);
const sizeCheckboxes = document.querySelectorAll(
  '.filters.sizes-fill input[type="checkbox"]'
);

// Dodawanie event listenerów dla zmiany stanu checkboxów
categoryCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateFilters);
});

colorCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateFilters);
});

sizeCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateFilters);
});

// Funkcja do aktualizacji filtrów i wyświetlania odpowiednich produktów
function updateFilters() {
  const selectedCategories = getSelectedValues(categoryCheckboxes);
  const selectedColors = getSelectedValues(colorCheckboxes);
  const selectedSizes = getSelectedValues(sizeCheckboxes);

  // Filtruj produkty
  const filteredItems = items.filter((item) => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      item.categories.some((category) => selectedCategories.includes(category));
    const colorMatch =
      selectedColors.length === 0 ||
      item.colors.some((color) => selectedColors.includes(color));
    const sizeMatch =
      selectedSizes.length === 0 ||
      item.sizes.some((size) => selectedSizes.includes(size));

    return categoryMatch && colorMatch && sizeMatch;
  });

  // Wyświetl tylko wyfiltrowane produkty
  displayFilteredItems(filteredItems);
}

// Funkcja do pobierania zaznaczonych wartości checkboxów
function getSelectedValues(checkboxes) {
  return Array.from(checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);
}

// Funkcja do wyświetlania wyfiltrowanych produktów
function displayFilteredItems(filteredItems) {
  // Usuń wszystkie produkty ze strony
  while (productList.firstChild) {
    productList.removeChild(productList.firstChild);
  }

  // Dodaj wyfiltrowane produkty
  filteredItems.forEach((product) => {
    addProduct(product);
  });
}

// Wyświetl wszystkie produkty start
items.forEach((product) => {
  addProduct(product);
});
