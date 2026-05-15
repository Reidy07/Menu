const menuItems = [
  {
    id: "lemonade",
    name: "Lemonade",
    category: "beverages",
    price: 3,
    detail: "Fresh lemon, mint and ice.",
    image: "https://loremflickr.com/640/420/lemonade?lock=101",
  },
  {
    id: "iced-tea",
    name: "Iced Tea",
    category: "beverages",
    price: 3,
    detail: "House iced tea with citrus.",
    image: "https://loremflickr.com/640/420/iced,tea?lock=102",
  },
  {
    id: "tropical-juice",
    name: "Tropical Juice",
    category: "beverages",
    price: 4,
    detail: "Fresh seasonal tropical juice.",
    image: "https://loremflickr.com/640/420/tropical,juice?lock=103",
  },
  {
    id: "smoothie",
    name: "Smoothie",
    category: "beverages",
    price: 5,
    detail: "Creamy tropical fruit smoothie.",
    image: "https://loremflickr.com/640/420/smoothie?lock=104",
  },
  {
    id: "bottled-water",
    name: "Bottled Water",
    category: "beverages",
    price: 2,
    detail: "Chilled individual water.",
    image: "https://loremflickr.com/640/420/bottled,water?lock=105",
  },
  {
    id: "garlic-bread",
    name: "Garlic Bread",
    category: "appetizers",
    price: 4,
    detail: "Toasted bread with garlic butter.",
    image: "https://loremflickr.com/640/420/garlic,bread?lock=106",
  },
  {
    id: "caesar-salad",
    name: "Caesar Salad",
    category: "appetizers",
    price: 5,
    detail: "Romaine lettuce, croutons and parmesan.",
    image: "https://loremflickr.com/640/420/caesar,salad?lock=107",
  },
  {
    id: "chicken-wings",
    name: "Chicken Wings",
    category: "appetizers",
    price: 6,
    detail: "Golden wings with house sauce.",
    image: "https://loremflickr.com/640/420/chicken,wings?lock=108",
  },
  {
    id: "stuffed-mushrooms",
    name: "Stuffed Mushrooms",
    category: "appetizers",
    price: 6,
    detail: "Baked stuffed mushrooms with cheese.",
    image: "https://loremflickr.com/640/420/stuffed,mushrooms?lock=109",
  },
  {
    id: "shrimp-cocktail",
    name: "Shrimp Cocktail",
    category: "appetizers",
    price: 7,
    detail: "Chilled shrimp with tropical sauce.",
    image: "https://loremflickr.com/640/420/shrimp,cocktail?lock=110",
  },
  {
    id: "grilled-chicken",
    name: "Grilled Chicken",
    category: "mains",
    price: 12,
    detail: "Grilled chicken breast with vegetables.",
    image: "https://loremflickr.com/640/420/grilled,chicken?lock=111",
  },
  {
    id: "beef-steak",
    name: "Beef Steak",
    category: "mains",
    price: 16,
    detail: "Beef cut with rustic potatoes.",
    image: "https://loremflickr.com/640/420/beef,steak?lock=112",
  },
  {
    id: "shrimp-pasta",
    name: "Shrimp Pasta",
    category: "mains",
    price: 14,
    detail: "Creamy pasta with sauteed shrimp.",
    image: "https://loremflickr.com/640/420/shrimp,pasta?lock=113",
  },
  {
    id: "caribbean-fish",
    name: "Caribbean Fish",
    category: "mains",
    price: 15,
    detail: "Local fish with rice and salad.",
    image: "https://loremflickr.com/640/420/grilled,fish?lock=114",
  },
  {
    id: "veggie-stir-fry",
    name: "Veggie Stir Fry",
    category: "mains",
    price: 11,
    detail: "Sauteed vegetables with jasmine rice.",
    image: "https://loremflickr.com/640/420/vegetable,stir,fry?lock=115",
  },
  {
    id: "chocolate-cake",
    name: "Chocolate Cake",
    category: "desserts",
    price: 5,
    detail: "Moist cocoa cake.",
    image: "https://loremflickr.com/640/420/chocolate,cake?lock=116",
  },
  {
    id: "cheesecake",
    name: "Cheesecake",
    category: "desserts",
    price: 5,
    detail: "Cheesecake with strawberry sauce.",
    image: "https://loremflickr.com/640/420/cheesecake?lock=117",
  },
  {
    id: "mango-mousse",
    name: "Mango Mousse",
    category: "desserts",
    price: 5,
    detail: "Smooth Dominican mango mousse.",
    image: "https://loremflickr.com/640/420/mango,dessert?lock=118",
  },
  {
    id: "ice-cream",
    name: "Ice Cream",
    category: "desserts",
    price: 4,
    detail: "Two scoops of artisan ice cream.",
    image: "https://loremflickr.com/640/420/ice,cream?lock=119",
  },
  {
    id: "fruit-platter",
    name: "Fruit Platter",
    category: "desserts",
    price: 4,
    detail: "Fresh seasonal fruit.",
    image: "https://loremflickr.com/640/420/fruit,platter?lock=120",
  },
  {
    id: "signature-dish",
    name: "Chef's Tropical Signature Dish",
    category: "mains",
    price: 18,
    detail: "Fish with mango salsa, rice and vegetables.",
    image: "https://loremflickr.com/640/420/tropical,fish,dish?lock=121",
    featured: true,
  },
];

const state = {
  filter: "all",
  order: [],
};

const menuGrid = document.querySelector("#menuGrid");
const orderList = document.querySelector("#orderList");
const orderTotal = document.querySelector("#orderTotal");

function formatUsd(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function renderMenu() {
  const items =
    state.filter === "all" ? menuItems : menuItems.filter((item) => item.category === state.filter);

  menuGrid.innerHTML = items
    .map(
      (item) => `
        <article class="menu-card ${item.featured ? "featured" : ""}">
          <div class="menu-visual ${item.category}">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <span class="menu-badge">${categoryLabel(item.category)}</span>
            ${item.featured ? '<span class="chef-pick">Chef pick</span>' : ""}
          </div>
          <div class="menu-card-body">
            <h3>${item.name}</h3>
            <p>${item.detail}</p>
          </div>
          <div class="price-row">
            <span class="price">${formatUsd(item.price)}</span>
            <button type="button" data-add="${item.id}" aria-label="Add ${item.name}">Add</button>
          </div>
        </article>
      `,
    )
    .join("");
}

function categoryLabel(category) {
  const labels = {
    beverages: "Beverage",
    appetizers: "Appetizer",
    mains: "Main course",
    desserts: "Dessert",
  };

  return labels[category] || "Menu item";
}

function addItem(id) {
  const item = menuItems.find((entry) => entry.id === id);
  if (!item) return;

  const existing = state.order.find((entry) => entry.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.order.push({ ...item, quantity: 1 });
  }

  renderOrder();
}

function removeItem(id) {
  state.order = state.order
    .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
    .filter((item) => item.quantity > 0);

  renderOrder();
}

function renderOrder() {
  if (state.order.length === 0) {
    orderList.innerHTML = "<li><span>No items yet</span><span></span><span></span></li>";
    orderTotal.textContent = formatUsd(0);
    return;
  }

  orderList.innerHTML = state.order
    .map(
      (item) => `
        <li>
          <span>${item.quantity} x ${item.name}</span>
          <strong>${formatUsd(item.quantity * item.price)}</strong>
          <button type="button" data-remove="${item.id}" aria-label="Remove ${item.name}">x</button>
        </li>
      `,
    )
    .join("");

  const total = state.order.reduce((sum, item) => sum + item.price * item.quantity, 0);
  orderTotal.textContent = formatUsd(total);
}

document.querySelector(".menu-controls").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  state.filter = button.dataset.category;
  document.querySelectorAll(".tab").forEach((tab) => {
    const active = tab === button;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  renderMenu();
});

menuGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");
  if (button) addItem(button.dataset.add);
});

orderList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove]");
  if (button) removeItem(button.dataset.remove);
});

document.querySelector("#addSpecial").addEventListener("click", () => addItem("signature-dish"));
document.querySelector("#clearOrder").addEventListener("click", () => {
  state.order = [];
  renderOrder();
});

renderMenu();
renderOrder();
