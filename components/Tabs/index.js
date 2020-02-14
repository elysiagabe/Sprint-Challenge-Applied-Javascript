// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// Tab parent div
const tabContainer = document.querySelector(".topics"); 

// Axios call
axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(res => {
    console.log(res.data);
    // will pull & append data here
    tabContainer.appendChild(Tabs(res.data));
})
.catch(err => console.log(`Error fetching data. ${err}`))

// function
function Tabs(obj) {
    // create element
    let tabDiv = document.createElement("div");

    // add class
    tabDiv.classList.add("tab");

    // add content
    tabDiv.textContent = obj.topics;

    return tabDiv
}