// Card database
const cardFolders = [
{
  id:1,
  name:"Life in Uk",
  description:"Most popular 24 question for life in UK exam",
  Difficulty: "medium",
  favourte: false,
  cards: [
      {
        id: 1,
        question: "What are the 40 days before Easter called?",
        answer: "Lent"
      },
      {
        id: 2,
        question: "Which country’s flag is NOT part of the Union Flag?",
        answer: "Wales"
      },
      {
        id: 3,
        question: "What is the minimum age required to serve on a jury?",
        answer: "18"
      },
      {
        id: 4,
        question: "Who was the first female Prime Minister of the UK?",
        answer: "Margaret Thatcher"
      },
      {
        id: 5,
        question: "When did the UK leave the EU following the Brexit vote?",
        answer: "2020"
      },
      {
        id: 6,
        question: "Which famous British landmark is located in Greenwich?",
        answer: "The O2"
      },
      {
        id: 7,
        question: "What did Sir Frank Whittle invent in the 1930s?",
        answer: "The jet engine."
      },
      {
        id: 8,
        question: "Who wrote the poem 'The Daffodils'?",
        answer: "William Wordsworth"
      },
      {
        id: 9,
        question: "What is the 'Ashes'?",
        answer: "A famous cricket competition played between England and Australia"
      },
      {
        id: 10,
        question: "Who was given the title of Lord Protector?",
        answer: "Oliver Cromwell"
      },
      {
        id: 11,
        question: "Which king was defeated at the Battle of Hastings in 1066?",
        answer: "Harold Godwinson (King Harold)"
      },
      {
        id: 12,
        question: "What is the name of the building where the Houses of Parliament are located?",
        answer: "The Palace of Westminster"
      },
      {
        id: 13,
        question: "Which Scottish city is known as the 'City of Discovery' and is associated with the RRS Discovery?",
        answer: "Dundee"
      },
      {
        id: 14,
        question: "What is the name of the ceremony where the Queen/King officially opens a new session of Parliament?",
        answer: "The State Opening of Parliament"
      },
      {
        id: 15,
        question: "Which British athlete won two gold medals for the 800m and 1500m at the 2004 Olympic Games?",
        answer: "Dame Kelly Holmes"
      },
      {
        id: 16,
        question: "What document, signed in 1215, limited the power of the King?",
        answer: "The Magna Carta"
      },
      {
        id: 17,
        question: "What are 'The Troubles'?",
        answer: "A period of conflict in Northern Ireland that lasted about 30 years"
      },
      {
        id: 18,
        question: "Which of these is a famous British scientist who discovered the laws of gravity?",
        answer: "Sir Isaac Newton"
      },
      {
        id: 19,
        question: "How often are General Elections held in the UK?",
        answer: "At least every 5 years"
      },
      {
        id: 20,
        question: "What is the name of the UK's currency?",
        answer: "Pound Sterling (£)"
      },
      {
        id: 21,
        question: "Who is the Patron Saint of Scotland?",
        answer: "St Andrew"
      },
      {
        id: 22,
        question: "Which 19th-century nurse is famous for her work during the Crimean War?",
        answer: "London"
      },
      {
        id: 23,
        question: "What is the capital of England?",
        answer: "Florence Nightingale"
      },
      {
        id: 24,
        question: "What is the name of the official home of the Prime Minister?",
        answer: "10 Downing Street"
      },
  ]
}
]

function displayCardFolder() {
  const container = document.getElementById("revision-cards");
  container.innerHTML = "";

  cardFolders.forEach(folder => {
    const folderHTML= `
        <div class="card">
          <div class="card-body">
            <h2>${folder.name}</h3>
            <p>${folder.description}</p>
            <p>${folder.cards.length}</p>
            <div class="card-actions">
              <i class="fa-regular fa-star icon"></i>  
              <i class="fa-solid fa-gear icon"></i>
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

function optionFolder(folderId) {
  currentFolder=folder.find(folder=>folder.Id===folderId);
  currentCardIndex=0;

  if (!cuurentFolder) return;
}