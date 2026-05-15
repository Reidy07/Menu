const menuItems = [
  {
    id: "lemonade",
    name: "Lemonade",
    category: "beverages",
    price: 3,
    detail: "Fresh lemon, mint and ice.",
  },
  {
    id: "iced-tea",
    name: "Iced Tea",
    category: "beverages",
    price: 3,
    detail: "House iced tea with citrus.",
  },
  {
    id: "tropical-juice",
    name: "Tropical Juice",
    category: "beverages",
    price: 4,
    detail: "Fresh seasonal tropical juice.",
  },
  {
    id: "smoothie",
    name: "Smoothie",
    category: "beverages",
    price: 5,
    detail: "Creamy tropical fruit smoothie.",
  },
  {
    id: "bottled-water",
    name: "Bottled Water",
    category: "beverages",
    price: 2,
    detail: "Chilled individual water.",
  },
  {
    id: "garlic-bread",
    name: "Garlic Bread",
    category: "appetizers",
    price: 4,
    detail: "Toasted bread with garlic butter.",
  },
  {
    id: "caesar-salad",
    name: "Caesar Salad",
    category: "appetizers",
    price: 5,
    detail: "Romaine lettuce, croutons and parmesan.",
  },
  {
    id: "chicken-wings",
    name: "Chicken Wings",
    category: "appetizers",
    price: 6,
    detail: "Golden wings with house sauce.",
  },
  {
    id: "stuffed-mushrooms",
    name: "Stuffed Mushrooms",
    category: "appetizers",
    price: 6,
    detail: "Baked stuffed mushrooms with cheese.",
  },
  {
    id: "shrimp-cocktail",
    name: "Shrimp Cocktail",
    category: "appetizers",
    price: 7,
    detail: "Chilled shrimp with tropical sauce.",
  },
  {
    id: "grilled-chicken",
    name: "Grilled Chicken",
    category: "mains",
    price: 12,
    detail: "Grilled chicken breast with vegetables.",
  },
  {
    id: "beef-steak",
    name: "Beef Steak",
    category: "mains",
    price: 16,
    detail: "Beef cut with rustic potatoes.",
  },
  {
    id: "shrimp-pasta",
    name: "Shrimp Pasta",
    category: "mains",
    price: 14,
    detail: "Creamy pasta with sauteed shrimp.",
  },
  {
    id: "caribbean-fish",
    name: "Caribbean Fish",
    category: "mains",
    price: 15,
    detail: "Local fish with rice and salad.",
  },
  {
    id: "veggie-stir-fry",
    name: "Veggie Stir Fry",
    category: "mains",
    price: 11,
    detail: "Sauteed vegetables with jasmine rice.",
  },
  {
    id: "chocolate-cake",
    name: "Chocolate Cake",
    category: "desserts",
    price: 5,
    detail: "Moist cocoa cake.",
  },
  {
    id: "cheesecake",
    name: "Cheesecake",
    category: "desserts",
    price: 5,
    detail: "Cheesecake with strawberry sauce.",
  },
  {
    id: "mango-mousse",
    name: "Mango Mousse",
    category: "desserts",
    price: 5,
    detail: "Smooth Dominican mango mousse.",
  },
  {
    id: "ice-cream",
    name: "Ice Cream",
    category: "desserts",
    price: 4,
    detail: "Two scoops of artisan ice cream.",
  },
  {
    id: "fruit-platter",
    name: "Fruit Platter",
    category: "desserts",
    price: 4,
    detail: "Fresh seasonal fruit.",
  },
  {
    id: "signature-dish",
    name: "Chef's Tropical Signature Dish",
    category: "mains",
    price: 18,
    detail: "Fish with mango salsa, rice and vegetables.",
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
            <span class="menu-symbol" aria-hidden="true">${categorySymbol(item.category)}</span>
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

function categorySymbol(category) {
  const symbols = {
    beverages: "D",
    appetizers: "A",
    mains: "M",
    desserts: "S",
  };

  return symbols[category] || "D";
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
