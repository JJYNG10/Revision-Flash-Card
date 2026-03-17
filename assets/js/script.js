let lastDeletedCard = null;

const defaultCards = [
  {
    id: 1,
    title: "Life In UK",
    description: "Most popular 24 question for life in UK exam",
    lastViewed: null
  },
  {
    id: 2,
    title: "Spanish",
    description: "Useful Spanish words for travelling",
    lastViewed: null
  }
];

let demoCards = loadCards();

function loadCards() {
  const savedCards = JSON.parse(localStorage.getItem("cards"));
  return savedCards || defaultCards;
}

function saveCards() {
  localStorage.setItem("cards", JSON.stringify(demoCards));
}

function displayCards() {
  const container = document.getElementById("revision-cards");
  if (!container) return;

  if (demoCards.length === 0) {
    container.innerHTML = `<p>No cards available.</p>`;
    return;
  }

  container.innerHTML = demoCards
    .map(
      (card) => `
        <div class="card">
          <div class="card-content">
            <h3>${card.title}</h3>
            <p>${card.description}</p>
            <div class="card-actions">
              <i class="fa-solid fa-trash-can icon" onclick="deleteCard(${card.id})"></i>
              <i class="fa-solid fa-gear icon"></i>
              <i class="fa-solid fa-share-nodes icon"></i>
            </div>
          </div>
        </div>
      `
    )
    .join("");
}

function deleteCard(cardId) {
  lastDeletedCard = demoCards.find((card) => card.id === cardId);
  if (!lastDeletedCard) return;

  demoCards = demoCards.filter((card) => card.id !== cardId);
  saveCards();
  displayCards();
  showUndoMessage();
}

function showUndoMessage() {
  const oldMessage = document.getElementById("undo-message");
  if (oldMessage) oldMessage.remove();

  const message = document.createElement("div");
  message.id = "undo-message";
  message.innerHTML = `
    Card deleted
    <button type="button" onclick="undoDelete()">Undo</button>
  `;

  message.style.position = "fixed";
  message.style.bottom = "20px";
  message.style.left = "50%";
  message.style.transform = "translateX(-50%)";
  message.style.background = "#333";
  message.style.color = "#fff";
  message.style.padding = "10px 20px";
  message.style.borderRadius = "8px";
  message.style.zIndex = "9999";

  document.body.appendChild(message);

  setTimeout(() => {
    const currentMessage = document.getElementById("undo-message");
    if (currentMessage) currentMessage.remove();
  }, 5000);
}

function undoDelete() {
  if (!lastDeletedCard) return;

  demoCards.push(lastDeletedCard);
  saveCards();
  displayCards();

  const message = document.getElementById("undo-message");
  if (message) message.remove();

  lastDeletedCard = null;
}

function resetCards() {
  demoCards = [...defaultCards];
  lastDeletedCard = null;
  saveCards();
  displayCards();
}

displayCards();