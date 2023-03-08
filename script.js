const imageContainer = document.querySelector(".image-container");

const loadImage = (fileName) => {
  const img = document.createElement("img");
  img.src = `img/${fileName}`;
  img.addEventListener("click", () => {
    alert(`You clicked on ${fileName}`);
  });
  imageContainer.appendChild(img);
};

const loadImages = () => {
  for (let i = 1; i <= 10; i++) {
    loadImage(`img${i}.jpg`);
  }
};

loadImages();
