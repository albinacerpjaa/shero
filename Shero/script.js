const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');
const dots = Array.from(document.querySelectorAll('.dot')); // Assuming the dots have the class 'dot'
const slideWidth = slides[0].getBoundingClientRect().width;

let currentIndex = 0;

// Function to update the active dot
const updateActiveDot = (index) => {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

nextButton.addEventListener('click', () => {
    const amountToMove = slideWidth;
    track.style.transform = 'translateX(-' + (currentIndex + 1) * slideWidth + 'px)';
    currentIndex = (currentIndex + 1) % slides.length;
    updateActiveDot(currentIndex); // Update active dot after changing slide
});

prevButton.addEventListener('click', () => {
    const amountToMove = slideWidth;
    track.style.transform = 'translateX(-' + (currentIndex - 1) * slideWidth + 'px)';
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateActiveDot(currentIndex); // Update active dot after changing slide
});

// Initial active dot
updateActiveDot(currentIndex);

