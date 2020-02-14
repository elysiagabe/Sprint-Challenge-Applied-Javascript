// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    // define elements
    let headerDiv = document.createElement("div"), 
        headerDate = document.createElement("span"),
        headerText  = document.createElement("h1"),
        headerTemp = document.createElement("span");

    // add classes
    headerDiv.classList.add("header");
    headerDate.classList.add("date");
    headerTemp.classList.add("temp");

    // add content
    headerDate.textContent = "SMARCH 28, 2019";
    headerText.textContent = "Lambda Times";
    headerTemp.textContent = "98°";

    // set structure 
    headerDiv.append(headerDate, headerText, headerTemp);

    // return
    return headerDiv;
}

// parent div
const headerContainer = document.querySelector(".header-container");

// append to parent
headerContainer.appendChild(Header());
