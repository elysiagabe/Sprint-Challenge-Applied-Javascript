/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

// parent div
const carouselContainer = document.querySelector(".carousel-container");

// images obj
const carouselImages = [
  "./assets/carousel/mountains.jpeg",
  "./assets/carousel/computer.jpeg",
  "./assets/carousel/trees.jpeg",
  "./assets/carousel/turntable.jpeg"
]

let imageIndex = 0;

function Carousel(obj) {
  // create elements
  let carousel = document.createElement("div"),
    image1 = document.createElement("img"),
    // image2 = document.createElement("img"),
    // image3 = document.createElement("img"),
    // image4 = document.createElement("img"),
    leftButton = document.createElement("div"),
    rightButton = document.createElement("div");

  // add classes
  carousel.classList.add("carousel");
  leftButton.classList.add("left-button");
  rightButton.classList.add("right-button");
  image1.classList.add("active-img");

  // click events?
  rightButton.addEventListener("click", event => {
    // if rightButton is clicked, I want image1.src to become carouselImages[imageIndex+1] as long as count < carouselImages.length (at which point count should return to 0)?
    
    var newIndex;
    
    if (imageIndex < carouselImages.length -1) {
      newIndex = ++imageIndex;
      image1.src = carouselImages[newIndex];
    } else {
      imageIndex = 0;
      image1.src = carouselImages[imageIndex]
    }
    
  })

  leftButton.addEventListener("click", event => {
    var newIndex;

    
  })

  // add content
  image1.src = carouselImages[imageIndex];
  // image2.src = carouselImages[1];
  // image3.src = carouselImages[2];
  // image4.src = carouselImages[3];
  leftButton.textContent = "<";
  rightButton.textContent = ">";

  // set structure
  carousel.append(leftButton, image1, /*image2, image3, image4, */rightButton);

  // return statement
  return carousel
}

// append to dom
carouselContainer.append(Carousel(carouselImages));
console.log(carouselContainer);