// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// Parent div
const cardsContainer = document.querySelector(".cards-container");

// Axios call
axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(res => {
    //console.log(res.data.articles);
    // get, loop thru & append data here
    Object.values(res.data.articles).forEach(value => {
        //console.log(value);
        value.forEach(article => {
            //console.log(article);
            cardsContainer.appendChild(Cards(article));
        })
    })
})
.catch(err => console.log(`There was an error fetching data. ${err}`));

// function
function Cards(obj) {
    // create elements
    let card = document.createElement("div"),
        headline = document.createElement("div"),
        authorInfo = document.createElement("div"),
        imgContainer = document.createElement("div"),
        authorImg = document.createElement("img"),
        authorName = document.createElement("span");

    // add classes
    card.classList.add("card");
    headline.classList.add("headline");
    authorInfo.classList.add("author");
    imgContainer.classList.add("img-container");

    // text content
    headline.textContent = obj.headline;
    authorName.textContent = obj.authorName;
    authorImg.src = obj.authorPhoto;

    // structure
    authorInfo.append(imgContainer, authorImg, authorName);
    card.append(headline, authorInfo);

    // return
    return card;
}