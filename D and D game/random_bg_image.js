// Define the array of image paths relative to your images folder
const images = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg'
  ];
  
  // Select a random image from the array
  const randomImage = images[Math.floor(Math.random() * images.length)];
  
  // Set the random image as the background
  const bodyElement = document.body;
  bodyElement.style.backgroundImage = `url(${randomImage})`;
  bodyElement.style.backgroundSize = "cover";
  bodyElement.style.backgroundPosition = "center";
  