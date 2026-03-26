// Card database
const cardFolders = [
{
  id:1,
  name:"Life in UK",
  description:"Most popular 24 question for life in UK exam",
  difficulty: "medium",
  favourite: false,
  cardColor: null,
  cards: [
      {
        id: 1,
        question: "What are the 40 days before Easter called?",
        answer: "Lent",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 2,
        question: "Which country’s flag is NOT part of the Union Flag?",
        answer: "Wales",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 3,
        question: "What is the minimum age required to serve on a jury?",
        answer: "18",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 4,
        question: "Who was the first female Prime Minister of the UK?",
        answer: "Margaret Thatcher",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 5,
        question: "When did the UK leave the EU following the Brexit vote?",
        answer: "2020",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 6,
        question: "Which famous British landmark is located in Greenwich?",
        answer: "The O2",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 7,
        question: "What did Sir Frank Whittle invent in the 1930s?",
        answer: "The jet engine.",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 8,
        question: "Who wrote the poem 'The Daffodils'?",
        answer: "William Wordsworth",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 9,
        question: "What is the 'Ashes'?",
        answer: "A famous cricket competition played between England and Australia",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 10,
        question: "Who was given the title of Lord Protector?",
        answer: "Oliver Cromwell",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 11,
        question: "Which king was defeated at the Battle of Hastings in 1066?",
        answer: "Harold Godwinson (King Harold)",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 12,
        question: "What is the name of the building where the Houses of Parliament are located?",
        answer: "The Palace of Westminster",
        remembered: false,
        notRemembered: false,
        favourite: false,
      },
      {
        id: 13,
        question: "Which Scottish city is known as the 'City of Discovery' and is associated with the RRS Discovery?",
        answer: "Dundee",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 14,
        question: "What is the name of the ceremony where the Queen/King officially opens a new session of Parliament?",
        answer: "The State Opening of Parliament",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 15,
        question: "Which British athlete won two gold medals for the 800m and 1500m at the 2004 Olympic Games?",
        answer: "Dame Kelly Holmes",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 16,
        question: "What document, signed in 1215, limited the power of the King?",
        answer: "The Magna Carta",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 17,
        question: "What are 'The Troubles'?",
        answer: "A period of conflict in Northern Ireland that lasted about 30 years",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 18,
        question: "Which of these is a famous British scientist who discovered the laws of gravity?",
        answer: "Sir Isaac Newton",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 19,
        question: "How often are General Elections held in the UK?",
        answer: "At least every 5 years",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 20,
        question: "What is the name of the UK's currency?",
        answer: "Pound Sterling (£)",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 21,
        question: "Who is the Patron Saint of Scotland?",
        answer: "St Andrew",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 22,
        question: "Which 19th-century nurse is famous for her work during the Crimean War?",
        answer: "London",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 23,
        question: "What is the capital of England?",
        answer: "Florence Nightingale",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 24,
        question: "What is the name of the official home of the Prime Minister?",
        answer: "10 Downing Street",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
  ]
},
{
  id:2,
  name:"Spanish travel words",
  description:"15 Native Spanish travel phrases",
  difficulty: "medium",
  favourite: false,
  cardColor: null,
  cards: [
      {
        id: 1,
        question: "Hola",
        answer: "Hello",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 2,
        question: "Disculpe",
        answer: "Excuse me",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 3,
        question: "Gracias",
        answer: "Thank you",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 4,
        question: "Por favor",
        answer: "Please",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 5,
        question: "De nada",
        answer: "You are welcome",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 6,
        question: "Buenos días",
        answer: "Good morning",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 7,
        question: "Buenas tardes",
        answer: "Good afternoon",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 8,
        question: "Buenas noches",
        answer: "Good night",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 9,
        question: "Mucho gusto",
        answer: "Nice to meet you",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 10,
        question: "¿Qué hora es?",
        answer: "What time is it?",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 11,
        question: "Sí, tengo mi pasaporte",
        answer: "Yes, I have my passport",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 12,
        question: "¿Me puede ayudar, por favor?",
        answer: "Can you please help me?",
        remembered: false,
        notRemembered: false,
        favourite: false,
      },
      {
        id: 13,
        question: "¿Habla inglés?",
        answer: "Do you speak English?",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 14,
        question: "¿Está incluido el desayuno?",
        answer: "Is breakfast included?",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 15,
        question: "Cual es la contraseña para el Wi-Fi?",
        answer: "What is the Wi-Fi password?",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
  ]
},
{
  id:3,
  name:"Basic HTML tags",
  description:"The most important html tags to remember ",
  difficulty: "easy",
  favourite: false,
  cardColor: null,
  cards: [
      {
        id: 1,
        question: "<a> ",
        answer: "for link",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 2,
        question: "<b>",
        answer: "to make bold text",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 3,
        question: "<strong>",
        answer: "for bold text with emphasys",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 4,
        question: "<body>",
        answer: "main HTML part",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 5,
        question: "<br>",
        answer: "for break",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 6,
        question: "<div>",
        answer: " it is a division or part of an HTML document",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 7,
        question: "<h1>",
        answer: "for titles",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 8,
        question: "<i>",
        answer: "to make an italic text",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 9,
        question: "<src>",
        answer: "Source link",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 10,
        question: "<img>",
        answer: "or images in document",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
        ]
},
{
  id:4,
  name:"Common Chemistry periodic",
  description:"Scientific chart organizing all 118 known chemical elements by increasing atomic number (protons)",
  difficulty: "hard",
  favourite: false,
  cardColor: null,
  cards: [
      {
        id: 1,
        question: " H",
        answer: "Hydrogen",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 2,
        question: "He",
        answer: "Helium ",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 3,
        question: "Li",
        answer: "Lithium ",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 4,
        question: "Be",
        answer: "Beryllium",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 5,
        question: "B",
        answer: "Boron",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 6,
        question: "C",
        answer: " Carbon",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 7,
        question: "N",
        answer: "Nitrogen ",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 8,
        question: "O",
        answer: "Oxygen ",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 9,
        question: "F",
        answer: "Fluorine ",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 10,
        question: "Na",
        answer: "Neon ",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
            {
        id: 11,
        question: "Na",
        answer: "Sodium ",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
        ]
},

{
  id:5,
  name:"Basic uk roadman slang",
  description:"London-influenced dialect",
  difficulty: "hard",
  favourite: false,
  cardColor: null,
  cards: [
      {
        id: 1,
        question: " Wagwan ",
        answer: "Hello, how are you?",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 2,
        question: "Ends",
        answer: "Your local area or neighborhood ",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 3,
        question: "Mandem",
        answer: "A group of male friends ",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 4,
        question: "Bare",
        answer: "A lot or very",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 5,
        question: "Peng",
        answer: "Attractive person or high-quality item",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 6,
        question: "Safe",
        answer: "  Cool, good, or used as a greeting",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 7,
        question: "Wasteman",
        answer: "Someone useless or annoying ",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 8,
        question: "Peak",
        answer: "Unfortunate, bad, or embarrassing ",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 9,
        question: "Allow it",
        answer: " Stop it, leave it out, or let it go ",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
      {
        id: 10,
        question: "Bruv",
        answer: "Brother or close friend",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
            {
        id: 11,
        question: "Garms",
        answer: "Clothing ",
        remembered: false,
        notRemembered: false,
        favourite: false
      },
        ]
},
]

function displayCardFolder() {
  const container = document.getElementById("revision-cards");
  container.innerHTML = "";

  cardFolders.forEach(folder => {
    const borderStyle=folder.cardColor?`border-color:${folder.cardColor};`:"";
    const textStyle=folder.cardColor?`color:${folder.cardColor};`:"";
    const iconStyle=folder.cardColor?`color:${folder.cardColor};`:"";
    const favouriteIconClass = folder.favourite ? "fa-solid" : "fa-regular";

    const folderHTML= `
        <div class="card folder-card" data-id="${folder.id}" style="${borderStyle}">
          <div class="card-body">
            <h2 style="${textStyle}">${folder.name}</h2>
            <p style="${textStyle}">${folder.description}</p>
            <p style="${textStyle}">${folder.cards.length} cards</p>
            <div class="card-actions">
            <i class="${favouriteIconClass} fa-star icon" style="${iconStyle}"
              onclick="event.stopPropagation(); toggleFolderFavourite(${folder.id})"
            ></i>  
              <i class="fa-solid fa-gear icon" style="${iconStyle}" onclick="event.stopPropagation(); openFolderSettings(${folder.id})"></i>
            </div>
          </div>
        </div>
      `;

      container.innerHTML += folderHTML;
  });
}

displayCardFolder();

// pop up revision modal
let currentFolder=null;
let currentCardIndex=0;

// click event listener
document.addEventListener("click", function(e) {
     const clickedCard = e.target.closest(".folder-card");
   
    if (clickedCard) {
      const id = Number(clickedCard.dataset.id);
      optionFolder(id);
    }
  }
);

//question card colour
function questionCardColour(){
  if (!currentFolder) return;
  const questionCard =document.getElementById("question-card");
  const modalQuestion=document.getElementById("modal-question");
  const folderTitle =document.getElementById("folder-title");
  const revealText =document.querySelector("#btn-reveal span");

  if (currentFolder.cardColor){
    questionCard.style.borderColor = currentFolder.cardColor;
    modalQuestion.style.color = currentFolder.cardColor;
     revealText.style.color = currentFolder.cardColor;
    } else {
 questionCard.style.borderColor = "";
    modalQuestion.style.color = "";
     revealText.style.color = "";
  }
}

// Open revision cards
function optionFolder(folderId) {
  console.log("opened folder:",folderId)

  currentFolder=cardFolders.find(folder=>folder.id===folderId);
  currentCardIndex=0;

  if (!currentFolder) return;

  //shuffle cards
  shuffleArray(currentFolder.cards);

  const modal= document.getElementById("revision-modal");
  const modalQuestion=document.getElementById("modal-question");

  document.getElementById("folder-title").textContent=currentFolder.name;

if (window.innerWidth >= 1200) {
    modal.classList.add("desktop-open");
    modal.style.display = "block";
  } else {
    modal.classList.remove("desktop-open");
    modal.style.display = "flex";
  }
  
 // modalQuestion.textContent = currentFolder.cards[currentCardIndex].question;
  modal.style.display="flex";

  showCurrentQuestion();
  questionCardColour()
}

// shuffle revision cards
function shuffleArray(array) {
  for (let a = array.length -1; a > 0; a--) {
    const b = Math.floor(Math.random() * (a+1));
    [array[a],array[b]]=[array[b],array[a]];
  }
}

// close button event listener
document.addEventListener("click", function(e) {
     const closeBtn = e.target.closest("#close-modal-btn");
     const modal = document.getElementById("revision-modal");
    if (closeBtn) {
      modal.style.display="none";
      modal.classList.remove("desktop-open");
    }
  }
);

// Fav button
document.getElementById("btn-click-fav").addEventListener("click", function () {
  if (!currentFolder) return;
  const currentCard = currentFolder.cards[currentCardIndex];
  const favIcon =document.querySelector("#btn-click-fav i");

  currentCard.favourite=true;

  favIcon.classList.remove("fa-regular");
  favIcon.classList.add("fa-solid");
  
  setTimeout(() => {
   gotoNextCard() 
  }, 200);
});

// show current question
function showCurrentQuestion() {
    if (!currentFolder) return;
  const modalQuestion = document.getElementById("modal-question");
  const favBtn = document.querySelector("#btn-click-fav i");
  const revealBtnText=document.querySelector("#btn-reveal span")
const progressText = document.getElementById("card-progress");

  modalQuestion.textContent=currentFolder.cards[currentCardIndex].question;

  //show card count
  progressText.textContent = `${currentCardIndex + 1} / ${currentFolder.cards.length}`;
  
  revealAnswer=false;
  revealBtnText.textContent="Reveal Answer"

questionCardColour();

  if (currentFolder.cards[currentCardIndex].favourite) {
    favBtn.classList.remove("fa-regular");
    favBtn.classList.add("fa-solid");
  } else {
    favBtn.classList.remove("fa-solid");
    favBtn.classList.add("fa-regular");
  }
}

// reveal answer 
let revealAnswer= false;
document.getElementById("btn-reveal").addEventListener("click", function () {
if (!currentFolder) return;

const modalText= document.getElementById("modal-question");
const currentCard = currentFolder.cards[currentCardIndex];
const buttonText = this.querySelector("span");

  if (!revealAnswer) {
    modalText.textContent = currentCard.answer;
    buttonText.textContent = "Hide Answer";
    revealAnswer=true;
  } else {
    modalText.textContent=currentCard.question;
    buttonText.textContent="Reveal Answer"
    revealAnswer=false;
  }
});

// right (remembered) click function
document.getElementById("btn-click-right").addEventListener("click", function(){
  if (!currentFolder) return;

  const currentCard= currentFolder.cards[currentCardIndex];
  currentCard.remembered=true;
  currentCard.notRemembered=false;

    animateToNextCard("right");
});

// next question
function gotoNextCard() {
  if (!currentFolder) return;

  currentCardIndex++;

  if (currentCardIndex >= currentFolder.cards.length) {
    showFinalResults();
    return;
  }

  showCurrentQuestion()
}

// left (NOT remembered) click function
document.getElementById("btn-click-left").addEventListener("click", function(){
  if (!currentFolder) return;

  const currentCard= currentFolder.cards[currentCardIndex];
  currentCard.remembered=false;
  currentCard.notRemembered=true;

  animateToNextCard("left");
});

// left and right animation
function animateToNextCard(direction){
  if (!currentFolder) return;

  const questionCard=document.getElementById("question-card");

  if (direction === "left"){
    questionCard.classList.add("slide-left");
  } else {
    questionCard.classList.add("slide-right");
  }

  setTimeout(() =>{
    gotoNextCard();

    questionCard.classList.remove("slide-left","slide-right");
    questionCard.classList.add("slide-reset");

    setTimeout(() => {
    questionCard.classList.remove("slide-reset");
  },20);
},300);
}

// show final result
function showFinalResults(){
  const modalQuestion=document.getElementById("modal-question");
  const questionCard=document.getElementById("question-card");
   questionCard.classList.add("no-border");
  const rememberedCount = currentFolder.cards.filter(card=>card.remembered).length;
  const notRememberedCount= currentFolder.cards.filter(card=>card.notRemembered).length;
  const favouriteCount= currentFolder.cards.filter(card=>card.favourite).length;
  modalQuestion.innerHTML = 
  `<h1>Session Summary </h1>
  <br>
  <h2>Mastered: ${rememberedCount} </h2>
  <h2>To Review: ${notRememberedCount} </h2>
  <h2>Favourites : ${favouriteCount} </h2>
  <br>
  <h2>Total Cards: ${currentFolder.cards.length} </h2>`;

  document.querySelector(".display-answer").style.display="none";
  document.querySelector(".modal-click-button").style.display="none";
}

function sortFolderByFavourite(){
  cardFolders.sort((a, b) => {
    return Number(b.favourite) - Number(a.favourite);
  });
}

function toggleFolderFavourite(folderId) {
  const folder=cardFolders.find(folder => folder.id === folderId);

  if (!folder) return;
  folder.favourite=!folder.favourite;

  sortFolderByFavourite();
  displayCardFolder();
}

// colour modal setting

let currentSettingsFolderId=null;
function openFolderSettings(folderId){
  currentSettingsFolderId=folderId;
  document.getElementById("settings-modal").style.display="flex";
}

document.getElementById("close-settings-btn").addEventListener("click",function(){
document.getElementById("settings-modal").style.display="none"});

document.querySelectorAll(".colour-btn").forEach(btn=>{btn.addEventListener("click",function(){
  if (currentSettingsFolderId===null) return;

  const selectedColour=this.dataset.colour;

  const folder=cardFolders.find(f=>f.id===currentSettingsFolderId);
  if (!folder)return;

  folder.cardColor=selectedColour;

  displayCardFolder()

  if(currentFolder && currentFolder.id === folder.id){
    questionCardColour();
  }
  document.getElementById("settings-modal").style.display="none";
});
});