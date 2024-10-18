let currentIndex = 0; 
const totalImages = 6; 

function nextSlide() {
  const frame = document.querySelector('.slider-frame');
  currentIndex = (currentIndex + 1) % totalImages; 
  frame.style.transform = `translateX(-${currentIndex * (100 / totalImages)}%)`; 
}

function prevSlide() {
  const frame = document.querySelector('.slider-frame');
  currentIndex = (currentIndex - 1 + totalImages) % totalImages; 
  frame.style.transform = `translateX(-${currentIndex * (100 / totalImages)}%)`; 
}
