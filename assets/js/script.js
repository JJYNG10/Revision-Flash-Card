//result graph
//const labels = Utils.months({count: 7});
//const data = {
//  labels: labels,
//  datasets: [{
//    label: 'My First Dataset',
//   data: [65, 59, 80, 81, 56, 55, 40],
//    fill: false,
//   borderColor: 'rgb(75, 192, 192)',
//    tension: 0.1
//  }]
//};

//demo cards
const demoCards = [
  {
    id:1,
    title: "Life In UK",
    description: "Most popular 24 question for life in UK exam",
    lastViewed:null
  },

  {
    id:2,
    title: "Spanish",
    description: "Useful Spanish words for travelling",
    lastViewed:null
  }, 
];

console.log(demoCards);

function displayCards(){
  const container=document.getElementById("revision-cards");

  container.innerHTML=" ";

  demoCards.forEach(card=>{
    const cardHTML =
    `<div class="card">
    <div id="revision-cards">
    <h3> ${card.title}</h3>
    <p> ${card.description}</p>
    <div>`;

    container.innerHTML+=cardHTML
  })
}

displayCards()
// let cards = JSON.parse(localStorage.getItem("cards"));

//if (!cards){#}