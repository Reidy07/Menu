const menuItems = [
  {
    id: "double-click-pizza",
    name: "The Double Click",
    category: "pizzas",
    price: 18.99,
    detail: "Pepperoni, Italian sausage, mushrooms, red onions and bell peppers on a thick crust.",
    featured: true,
  },
  {
    id: "open-source-margherita",
    name: "Open Source Margherita",
    category: "pizzas",
    price: 15.99,
    detail: "San Marzano tomatoes, fresh mozzarella and micro-basil leaf garnish.",
  },
  {
    id: "debug-diavola",
    name: "Debug Diavola",
    category: "pizzas",
    price: 16.99,
    detail: "Spicy salami, mozzarella, chili oil and roasted garlic.",
  },
  {
    id: "cloud-cuatro-quesos",
    name: "Cloud Cuatro Quesos",
    category: "pizzas",
    price: 17.99,
    detail: "Mozzarella, gorgonzola, provolone and parmesan with white truffle oil.",
  },
  {
    id: "admin-garlic-knots",
    name: "Admin Garlic Knots",
    category: "sides",
    price: 6.99,
    detail: "Soft garlic knots brushed with herb butter and parmesan.",
  },
  {
    id: "plug-play-caesar",
    name: "Caesar Salad 'Plug & Play'",
    category: "sides",
    price: 10.99,
    detail: "Crisp romaine, parmesan, croutons and creamy Caesar dressing.",
  },
  {
    id: "loaded-pizza-fries",
    name: "Loaded Pizza Fries",
    category: "sides",
    price: 8.99,
    detail: "Crispy fries with marinara, mozzarella and pepperoni bits.",
  },
  {
    id: "fresh-lemonade",
    name: "Fresh Lemonade",
    category: "beverages",
    price: 3.5,
    detail: "Lemon, mint and sparkling water.",
  },
  {
    id: "strawberry-smoothie",
    name: "Strawberry Smoothie",
    category: "beverages",
    price: 4.99,
    detail: "Creamy strawberry drink served cold.",
  },
  {
    id: "mango-juice",
    name: "Mango Juice",
    category: "beverages",
    price: 4.5,
    detail: "Fresh mango flavor with a tropical finish.",
  },
  {
    id: "iced-tea",
    name: "Iced Tea",
    category: "beverages",
    price: 2.75,
    detail: "House iced tea with citrus.",
  },
  {
    id: "bottled-water",
    name: "Bottled Water",
    category: "beverages",
    price: 1.99,
    detail: "Chilled individual water.",
  },
  {
    id: "double-click-special",
    name: "Double Click Special Drink",
    category: "beverages",
    price: 6.99,
    detail: "Lemonade, strawberry syrup, mint and sparkling water. Perfect with pizza.",
    featured: true,
  },
  {
    id: "panna-cotta-cache",
    name: "Panna Cotta 'Cache'",
    category: "desserts",
    price: 8.99,
    detail: "Silky vanilla panna cotta with berry sauce.",
  },
  {
    id: "tiramisu-terminal",
    name: "Tiramisu Terminal",
    category: "desserts",
    price: 7.99,
    detail: "Coffee-soaked layers with mascarpone cream.",
  },
];

const state = {
  filter: "all",
  order: [],
  rewardUnlocked: false,
  gameRunning: false,
  gameScore: 0,
  gameTime: 15,
  timer: null,
};

const menuGrid = document.querySelector("#menuGrid");
const orderList = document.querySelector("#orderList");
const orderTotal = document.querySelector("#orderTotal");
const gameScore = document.querySelector("#gameScore");
const gameTime = document.querySelector("#gameTime");
const rewardBadge = document.querySelector("#rewardBadge");
const startGame = document.querySelector("#startGame");
const resetGame = document.querySelector("#resetGame");
const gameMessage = document.querySelector("#gameMessage");
const gameBoard = document.querySelector("#gameBoard");
const sliceTarget = document.querySelector("#sliceTarget");

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
    pizzas: "Pizza",
    beverages: "Drink",
    sides: "Side",
    desserts: "Dessert",
  };

  return labels[category] || "Menu item";
}

function categorySymbol(category) {
  const symbols = {
    pizzas: "P",
    beverages: "D",
    sides: "S",
    desserts: "T",
  };

  return symbols[category] || "P";
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

function getSubtotal() {
  return state.order.reduce((sum, item) => sum + item.price * item.quantity, 0);
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

  const subtotal = getSubtotal();
  const discount = state.rewardUnlocked ? Math.min(3, subtotal) : 0;
  orderTotal.textContent = formatUsd(subtotal - discount);

  if (state.rewardUnlocked && !document.querySelector(".reward-line")) {
    orderList.insertAdjacentHTML(
      "beforeend",
      `<li class="reward-line"><span>Mini game reward</span><strong>-${formatUsd(discount)}</strong><span></span></li>`,
    );
  }
}

function updateGameDisplay() {
  gameScore.textContent = state.gameScore;
  gameTime.textContent = state.gameTime;
  rewardBadge.textContent = state.rewardUnlocked ? "Reward unlocked: $3 off" : "Reward locked";
  rewardBadge.classList.toggle("unlocked", state.rewardUnlocked);
}

function moveSlice() {
  const board = gameBoard.getBoundingClientRect();
  const targetSize = 54;
  const maxX = Math.max(0, board.width - targetSize);
  const maxY = Math.max(0, board.height - targetSize);
  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);
  const rotation = Math.floor(Math.random() * 180) - 90;

  sliceTarget.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
}

function finishGame(message) {
  state.gameRunning = false;
  clearInterval(state.timer);
  startGame.disabled = false;
  sliceTarget.classList.remove("active");
  gameMessage.textContent = message;
  updateGameDisplay();
  renderOrder();
}

function startMiniGame() {
  state.gameRunning = true;
  state.rewardUnlocked = false;
  state.gameScore = 0;
  state.gameTime = 15;
  startGame.disabled = true;
  sliceTarget.classList.add("active");
  gameMessage.textContent = "Catch 12 slices before time runs out.";
  updateGameDisplay();
  moveSlice();

  clearInterval(state.timer);
  state.timer = setInterval(() => {
    state.gameTime -= 1;
    updateGameDisplay();

    if (state.gameTime <= 0) {
      if (state.gameScore >= 12) {
        state.rewardUnlocked = true;
        finishGame("You won! Your $3 reward is unlocked.");
      } else {
        finishGame("Time is up. Reset and try again for the reward.");
      }
    }
  }, 1000);
}

function resetMiniGame() {
  state.gameRunning = false;
  state.gameScore = 0;
  state.gameTime = 15;
  state.rewardUnlocked = false;
  clearInterval(state.timer);
  startGame.disabled = false;
  sliceTarget.classList.remove("active");
  sliceTarget.style.transform = "translate(50%, 50%)";
  gameMessage.textContent = "Press start, then catch the slice as fast as you can.";
  updateGameDisplay();
  renderOrder();
}

function catchSlice() {
  if (!state.gameRunning) return;

  state.gameScore += 1;
  gameMessage.textContent = state.gameScore >= 9 ? "Almost there. Keep clicking!" : "Nice catch!";
  updateGameDisplay();
  moveSlice();

  if (state.gameScore >= 12) {
    state.rewardUnlocked = true;
    finishGame("You won! Your $3 reward is unlocked.");
  }
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

document.querySelector("#addSpecial").addEventListener("click", () => addItem("double-click-pizza"));
document.querySelector("#clearOrder").addEventListener("click", () => {
  state.order = [];
  renderOrder();
});

startGame.addEventListener("click", startMiniGame);
resetGame.addEventListener("click", resetMiniGame);
sliceTarget.addEventListener("click", catchSlice);

renderMenu();
renderOrder();
updateGameDisplay();
sliceTarget.classList.remove("active");
