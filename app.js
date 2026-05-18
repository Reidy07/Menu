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
    { category: "pizzas", title: "Pizzas", note: "Wood-fired style favorites" },
    { category: "beverages", title: "Beverages", note: "Fresh and cold drinks" },
    { category: "sides", title: "Sides", note: "Perfect with every slice" },
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

document.querySelector("#addSpecial").addEventListener("click", () => addItem("double-click-pizza"));
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
