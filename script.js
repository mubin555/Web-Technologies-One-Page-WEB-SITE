/*const images = [
  "images/barcelona1.jpg",
  "images/barcelona2.jpg",
  "images/barcelona3.jpg",
  "images/barcelona4.jpg",
  "images/barcelona5.jpg",
  "images/barcelona6.jpg",
  "images/barcelona7.jpg"
];
let currentIndex = 0;

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("slideshow-image").src = images[currentIndex];
}

function toggleFacts() {
  const factsList = document.getElementById("facts-list");
  if (factsList.style.display === "none") {
    factsList.style.display = "block";
  } else {
    factsList.style.display = "none";
  }
}  */



const images = [
  "images/barcelona1.jpg",
  "images/barcelona2.jpg",
  "images/barcelona3.jpg",
  "images/barcelona4.jpg",
  "images/barcelona5.jpg",
  "images/barcelona6.jpg"
];

let currentIndex = 0;
const imagesPerSlide = 3;

function showImages() {
  const container = document.getElementById("slideshow-container");
  container.innerHTML = "";

  for (let i = 0; i < imagesPerSlide; i++) {
    const imgIndex = (currentIndex + i) % images.length;
    const img = document.createElement("img");
    img.src = images[imgIndex];
    img.alt = `Barcelona ${imgIndex + 1}`;
    img.className = "slideshow-img";
    container.appendChild(img);
  }
}

function nextImageGroup() {
  currentIndex = (currentIndex + 1) % images.length;
  showImages();
}

function prevImageGroup() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImages();
}
function toggleFacts() {
  const factsList = document.getElementById("facts-list");
  if (factsList.style.display === "none") {
    factsList.style.display = "block";
  }else {
    factsList.style.display = "none";
  }  
}

window.onload = showImages;
