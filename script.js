function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const carouselInner = carousel.querySelector('.carousel-inner');
    const items = carousel.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let currentIndex = 0;
  
    function showSlide(index) {
      carouselInner.style.transform = `translateX(-${index * 100}%)`;
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalItems;
      showSlide(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      showSlide(currentIndex);
    }
  
    // Add event listeners for next and previous buttons
    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);
  });
  