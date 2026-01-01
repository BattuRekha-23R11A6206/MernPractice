// Image Slider

const slides = document.querySelectorAll('.slides');
let slideIndex = 0;
let intervalId = null; // To store the interval ID null means no v

document.addEventListener('DOMContentLoaded',initializeSlider); // it will call the function when the DOM is fully loaded rather 
                                                                // than calling initializeSlider() directly which may run before the DOM is ready

function initializeSlider() {

    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide"); // Show the first slide

        // Start automatic sliding every 3 seconds
        intervalId = setInterval(() => {
            nextSlide();   
        }, 5000);
    }
}


// Function to show the slide at the current index
function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach((slide) => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

