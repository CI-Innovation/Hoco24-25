const slides = document.querySelectorAll('.slide');
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'previous', 'next');
        if (i === index) {
            slide.classList.add('active');
        } else if (i < index) {
            slide.classList.add('previous');
        } else {
            slide.classList.add('next');
        }
    });
}

backBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
});

// Initialize the first slide
showSlide(currentIndex);
