const sliderImages = document.querySelectorAll('.slider-img');
const details = document.querySelector('.details');

let currentSlide = 0;

// Function to show details for the active slide
function showDetails(slideIndex) {
  details.innerHTML = `<h2>Slide ${slideIndex + 1}</h2><p>This is some descriptive text for slide ${slideIndex + 1}</p>`;
}

// Function to handle slide change
function changeSlide(slideIndex) {
  sliderImages.forEach(image => image.classList.remove('active'));
  sliderImages[slideIndex].classList.add('active');
  showDetails(slideIndex);
}

// Add click event listener to each slider image
sliderImages.forEach((image, index) => {
  image.addEventListener('click', () => {
    changeSlide(index);
  });
});

// Optional: Autoplay functionality (adjust interval as needed)
setInterval(() => {
  currentSlide = (currentSlide + 1) % sliderImages.length;
  changeSlide(currentSlide);
}, 5000); // Change slide every 5 seconds