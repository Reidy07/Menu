const menuItems = [
  {
    id: "margherita-supreme",
    name: "Margherita Supreme",
    category: "classic-pizzas",
    price: 12.99,
    detail: "Tomato sauce, mozzarella, basil and olive oil on a classic crust.",
  },
  {
    id: "pepperoni-passion",
    name: "Pepperoni Passion",
    category: "classic-pizzas",
    price: 13.99,
    detail: "Mozzarella, tomato sauce and crisp pepperoni.",
  },
  {
    id: "veggie-delight",
    name: "Veggie Delight",
    category: "classic-pizzas",
    price: 14.99,
    detail: "Fresh vegetables, mozzarella and herb tomato sauce.",
  },
  {
    id: "meat-lovers-feast",
    name: "Meat Lover's Feast",
    category: "classic-pizzas",
    price: 16.99,
    detail: "Pepperoni, sausage, ham and mozzarella.",
  },
  {
    id: "pesto-paradiso",
    name: "Pesto Paradiso",
    category: "artisan-pizzas",
    price: 17.99,
    detail: "Pesto sauce, mozzarella, tomatoes and fresh herbs.",
  },
  {
    id: "four-cheese-cloud",
    name: "Four Cheese Cloud",
    category: "artisan-pizzas",
    price: 15.99,
    detail: "Mozzarella, gorgonzola, provolone and parmesan.",
  },
  {
    id: "white-truffle-dream",
    name: "White Truffle Dream",
    category: "artisan-pizzas",
    price: 19.99,
    detail: "Creamy white sauce, mushrooms, mozzarella and truffle oil.",
  },
  {
    id: "smoky-bbq-chicken",
    name: "Smoky BBQ Chicken",
    category: "artisan-pizzas",
    price: 16.99,
    detail: "Smoky barbecue sauce, chicken, onions and mozzarella.",
  },
  {
    id: "the-builder",
    name: "The Builder",
    category: "custom-creations",
    price: 18.99,
    detail: "Base pizza with your choice of 3 toppings.",
  },
  {
    id: "gluten-free-build",
    name: "Gluten-Free Build",
    category: "custom-creations",
    price: 20.99,
    detail: "Gluten-free crust with sauce, cheese and custom toppings.",
  },
  {
    id: "vegan-build",
    name: "Vegan Build",
    category: "custom-creations",
    price: 19.99,
    detail: "Plant-based cheese, tomato sauce and vegetable toppings.",
  },
  {
    id: "dessert-pizza",
    name: "Dessert Pizza",
    category: "custom-creations",
    price: 14.99,
    detail: "Nutella, fruit and a sweet crisp crust.",
  },
  {
    id: "double-click-special-pizza",
    name: "Double Click Special Pizza",
    category: "chef-recommendation",
    price: 6.99,
    detail: "A signature combination of artisanal dough, special sauce, aged mozzarella, salami, mushrooms and bell peppers.",
    featured: true,
  },
  {
    id: "garlic-knots",
    name: "Garlic Knots",
    category: "sides-starters",
    price: 5.99,
    detail: "Soft knots brushed with garlic butter and herbs.",
  },
  {
    id: "caesar-salad",
    name: "Caesar Salad",
    category: "sides-starters",
    price: 8.99,
    detail: "Crisp romaine, parmesan, croutons and creamy Caesar dressing.",
  },
  {
    id: "caprese-bites",
    name: "Caprese Bites",
    category: "sides-starters",
    price: 9.99,
    detail: "Tomato, mozzarella and basil bites.",
  },
  {
    id: "olive-focaccia",
    name: "Olive Focaccia",
    category: "sides-starters",
    price: 6.99,
    detail: "Warm focaccia with olives and herbs.",
  },
  {
    id: "small-garlic-knots",
    name: "Garlic Knots",
    category: "small-bites",
    price: 4.5,
    detail: "Small bite-size garlic knots.",
  },
  {
    id: "mini-rice-balls",
    name: "Mini Rice Balls",
    category: "small-bites",
    price: 6,
    detail: "Crispy mini rice balls with dipping sauce.",
  },
  {
    id: "coca-cola",
    name: "Coca-Cola",
    category: "soft-drinks",
    price: 2.99,
    detail: "Classic chilled soft drink.",
  },
  {
    id: "sprite",
    name: "Sprite",
    category: "soft-drinks",
    price: 2.99,
    detail: "Chilled lemon-lime soda.",
  },
  {
    id: "orange-fanta",
    name: "Orange Fanta",
    category: "soft-drinks",
    price: 2.99,
    detail: "Chilled orange soda.",
  },
  {
    id: "diet-coke",
    name: "Diet Coke",
    category: "soft-drinks",
    price: 2.99,
    detail: "Chilled diet cola.",
  },
  {
    id: "dr-pepper",
    name: "Dr Pepper",
    category: "soft-drinks",
    price: 2.99,
    detail: "Chilled spiced soda.",
  },
  {
    id: "fresh-lemonade",
    name: "Fresh Lemonade",
    category: "natural-drinks",
    price: 3.5,
    detail: "Lemon, mint and sparkling water.",
  },
  {
    id: "strawberry-smoothie",
    name: "Strawberry Smoothie",
    category: "natural-drinks",
    price: 4.99,
    detail: "Creamy strawberry drink served cold.",
  },
  {
    id: "mango-juice",
    name: "Mango Juice",
    category: "natural-drinks",
    price: 4.5,
    detail: "Fresh mango flavor with a tropical finish.",
  },
  {
    id: "iced-tea",
    name: "Iced Tea",
    category: "natural-drinks",
    price: 2.75,
    detail: "House iced tea with citrus.",
  },
  {
    id: "bottled-water",
    name: "Bottled Water",
    category: "natural-drinks",
    price: 1.99,
    detail: "Chilled individual water.",
  },
  {
    id: "espresso",
    name: "Espresso",
    category: "hot-drinks",
    price: 3.25,
    detail: "Freshly pulled espresso shot.",
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    category: "hot-drinks",
    price: 4.25,
    detail: "Espresso with steamed milk foam.",
  },
  {
    id: "hot-chocolate",
    name: "Hot Chocolate",
    category: "hot-drinks",
    price: 3.99,
    detail: "Warm chocolate drink.",
  },
  {
    id: "hot-tea",
    name: "Hot Tea",
    category: "hot-drinks",
    price: 2.75,
    detail: "Fresh hot tea.",
  },
  {
    id: "blue-raspberry-soda",
    name: "Blue Raspberry Soda",
    category: "special-drinks",
    price: 5.5,
    detail: "Bright blue raspberry soda.",
  },
  {
    id: "italian-paloma",
    name: "Italian Paloma",
    category: "premium-special-drinks",
    price: 9.5,
    detail: "Premium citrus cocktail-style drink.",
  },
  {
    id: "aperol-spritz",
    name: "Aperol Spritz",
    category: "premium-special-drinks",
    price: 9,
    detail: "Sparkling Italian-style spritz.",
  },
  {
    id: "house-red",
    name: "House Red",
    category: "wines",
    price: 6.5,
    detail: "Cabernet by the glass.",
  },
  {
    id: "house-white",
    name: "House White",
    category: "wines",
    price: 6.5,
    detail: "Chardonnay by the glass.",
  },
  {
    id: "sangria-glass",
    name: "Sangria Glass",
    category: "wines",
    price: 5.99,
    detail: "House sangria by the glass.",
  },
  {
    id: "merlot-bottle",
    name: "Merlot Bottle",
    category: "wines",
    price: 24,
    detail: "Bottle of Merlot.",
  },
  {
    id: "pinot-grigio-bottle",
    name: "Pinot Grigio Bottle",
    category: "wines",
    price: 24,
    detail: "Bottle of Pinot Grigio.",
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
  order: [],
  rewardUnlocked: false,
  gameRunning: false,
  gameScore: 0,
  gameTime: 12,
  timer: null,
  soundEnabled: false,
  audioContext: null,
};

const menuGrid = document.querySelector("#menuGrid");
const orderList = document.querySelector("#orderList");
const orderTotal = document.querySelector("#orderTotal");
const orderChipTotal = document.querySelector("#orderChipTotal");
const orderChipCount = document.querySelector("#orderChipCount");
const gameScore = document.querySelector("#gameScore");
const gameTime = document.querySelector("#gameTime");
const rewardBadge = document.querySelector("#rewardBadge");
const startGame = document.querySelector("#startGame");
const resetGame = document.querySelector("#resetGame");
const soundToggle = document.querySelector("#soundToggle");
const gameMessage = document.querySelector("#gameMessage");
const gameBoard = document.querySelector("#gameBoard");
const gameBurst = document.querySelector("#gameBurst");
const sliceTarget = document.querySelector("#sliceTarget");
const prizeModal = document.querySelector("#prizeModal");
const closePrize = document.querySelector("#closePrize");

function formatUsd(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function renderMenu() {
  const sections = [
    { category: "classic-pizzas", title: "Classic Pizzas", note: "Traditional favorites" },
    { category: "artisan-pizzas", title: "Artisan Pizzas", note: "Chef-crafted flavors" },
    { category: "sides-starters", title: "Sides & Starters", note: "Perfect with every slice" },
    { category: "custom-creations", title: "Custom Creations", note: "Build your perfect pizza" },
    { category: "chef-recommendation", title: "Chef Recommendation", note: "Double Click special" },
    { category: "soft-drinks", title: "Soft Drinks", note: "Classic chilled sodas" },
    { category: "natural-drinks", title: "Natural Drinks", note: "Fresh and fruity" },
    { category: "hot-drinks", title: "Hot Drinks", note: "Warm favorites" },
    { category: "special-drinks", title: "Special Drinks", note: "Bold house flavors" },
    { category: "premium-special-drinks", title: "Premium Special Drinks", note: "Premium sips" },
    { category: "wines", title: "Wines", note: "By the glass or bottle" },
    { category: "small-bites", title: "Small Bites", note: "Light snacks" },
    { category: "desserts", title: "Desserts", note: "Sweet finish" },
  ];

  menuGrid.innerHTML = sections
    .map((section) => {
      const sectionItems = menuItems.filter((item) => item.category === section.category);

      return `
        <section class="poster-section ${section.category}">
          <div class="poster-section-head">
            <span class="poster-icon">${categorySymbol(section.category)}</span>
            <div>
              <h3>${section.title}</h3>
              <p>${section.note}</p>
            </div>
          </div>
          <div class="poster-items">
            ${sectionItems.map(renderPosterItem).join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function renderPosterItem(item) {
  return `
    <article class="poster-item ${item.featured ? "featured" : ""}">
      <div class="poster-item-main">
        <div class="poster-title-row">
          <h4>${item.name}</h4>
          ${item.featured ? '<span class="chef-pick">Chef pick</span>' : ""}
        </div>
        <p>${item.detail}</p>
      </div>
      <span class="price-dots" aria-hidden="true"></span>
      <strong class="poster-price">${formatUsd(item.price)}</strong>
      <button type="button" data-add="${item.id}" aria-label="Add ${item.name}">Add</button>
    </article>
  `;
}

function categorySymbol(category) {
  const symbols = {
    "classic-pizzas": "C",
    "artisan-pizzas": "A",
    "sides-starters": "S",
    "custom-creations": "B",
    "chef-recommendation": "R",
    "soft-drinks": "S",
    "natural-drinks": "N",
    "hot-drinks": "H",
    "special-drinks": "*",
    "premium-special-drinks": "P",
    wines: "W",
    "small-bites": "B",
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
  const subtotal = getSubtotal();
  const itemCount = state.order.reduce((sum, item) => sum + item.quantity, 0);

  orderChipTotal.textContent = formatUsd(subtotal);
  orderChipCount.textContent = `${itemCount} ${itemCount === 1 ? "item" : "items"}`;

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

  orderTotal.textContent = formatUsd(subtotal);

  if (state.rewardUnlocked && !document.querySelector(".reward-line")) {
    orderList.insertAdjacentHTML(
      "beforeend",
      `<li class="reward-line"><span>Mini game prize</span><strong>Sweet treat</strong><span></span></li>`,
    );
  }
}

function updateGameDisplay() {
  gameScore.textContent = state.gameScore;
  gameTime.textContent = state.gameTime;
  rewardBadge.textContent = state.rewardUnlocked ? "You won a sweet treat!" : "Sweet treat locked";
  rewardBadge.classList.toggle("unlocked", state.rewardUnlocked);
  soundToggle.textContent = state.soundEnabled ? "Sound on" : "Sound off";
  soundToggle.setAttribute("aria-pressed", String(state.soundEnabled));
}

function getAudioContext() {
  if (!state.audioContext) {
    const AudioEngine = window.AudioContext || window.webkitAudioContext;
    state.audioContext = new AudioEngine();
  }

  return state.audioContext;
}

function playTone(frequency, duration = 0.08, type = "sine") {
  if (!state.soundEnabled) return;

  const audio = getAudioContext();
  const oscillator = audio.createOscillator();
  const gain = audio.createGain();

  oscillator.type = type;
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(0.0001, audio.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.16, audio.currentTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + duration);
  oscillator.connect(gain);
  gain.connect(audio.destination);
  oscillator.start();
  oscillator.stop(audio.currentTime + duration + 0.02);
}

function playCatchSound() {
  playTone(520, 0.07, "triangle");
}

function playWinSound() {
  [440, 554, 659, 880].forEach((note, index) => {
    setTimeout(() => playTone(note, 0.12, "triangle"), index * 110);
  });
}

function showCatchBurst() {
  gameBurst.classList.remove("pop");
  void gameBurst.offsetWidth;
  gameBurst.classList.add("pop");
}

function showPrizeModal() {
  prizeModal.classList.add("show");
  prizeModal.setAttribute("aria-hidden", "false");
}

function hidePrizeModal() {
  prizeModal.classList.remove("show");
  prizeModal.setAttribute("aria-hidden", "true");
}

function moveSlice() {
  const board = gameBoard.getBoundingClientRect();
  const targetSize = 42;
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
  state.gameTime = 12;
  startGame.disabled = true;
  sliceTarget.classList.add("active");
  gameMessage.textContent = "Catch 18 tiny slices before time runs out.";
  updateGameDisplay();
  moveSlice();

  clearInterval(state.timer);
  state.timer = setInterval(() => {
    state.gameTime -= 1;
    updateGameDisplay();

    if (state.gameTime <= 0) {
      if (state.gameScore >= 18) {
        state.rewardUnlocked = true;
        finishGame("You won! Claim your sweet treat at the counter.");
      } else {
        finishGame("Time is up. Reset and try again for the reward.");
      }
    }
  }, 1000);
}

function resetMiniGame() {
  state.gameRunning = false;
  state.gameScore = 0;
  state.gameTime = 12;
  state.rewardUnlocked = false;
  clearInterval(state.timer);
  startGame.disabled = false;
  sliceTarget.classList.remove("active");
  sliceTarget.style.transform = "translate(50%, 50%)";
  hidePrizeModal();
  gameMessage.textContent = "Press start, then catch the slice as fast as you can.";
  updateGameDisplay();
  renderOrder();
}

function catchSlice() {
  if (!state.gameRunning) return;

  state.gameScore += 1;
  gameMessage.textContent = state.gameScore >= 14 ? "Almost there. Keep clicking!" : "Nice catch!";
  playCatchSound();
  showCatchBurst();
  updateGameDisplay();
  moveSlice();

  if (state.gameScore >= 18) {
    state.rewardUnlocked = true;
    playWinSound();
    showPrizeModal();
    finishGame("You won! Claim your sweet treat at the counter.");
  }
}

menuGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");
  if (button) addItem(button.dataset.add);
});

orderList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove]");
  if (button) removeItem(button.dataset.remove);
});

document.querySelector("#addSpecial").addEventListener("click", () => addItem("double-click-special-pizza"));
document.querySelector("#clearOrder").addEventListener("click", () => {
  state.order = [];
  renderOrder();
});

startGame.addEventListener("click", startMiniGame);
resetGame.addEventListener("click", resetMiniGame);
soundToggle.addEventListener("click", () => {
  state.soundEnabled = !state.soundEnabled;
  if (state.soundEnabled) {
    getAudioContext().resume();
    playTone(660, 0.08, "triangle");
  }
  updateGameDisplay();
});
sliceTarget.addEventListener("click", catchSlice);
closePrize.addEventListener("click", hidePrizeModal);

renderMenu();
renderOrder();
updateGameDisplay();
sliceTarget.classList.remove("active");
