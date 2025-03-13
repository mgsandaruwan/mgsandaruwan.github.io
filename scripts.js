// Smooth Scrolling
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

var typed= new Typed(".typing2",{
    strings:["Mobile App Developer","Web Developer","Graphic Designer"],
    typeSpeed:150,
    backSpeed:100,
    loop: true
  });

AOS.init({
    duration: 1000, // Animation duration in milliseconds
    easing: 'ease-out', // Easing function
    once: false, // Animation happens only once
  });

  // Initialize Swiper
new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 300,

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Allows user to click on dots
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Breakpoints for responsive behavior
    breakpoints: {
        0: {
            slidesPerView: 2, // Small screens
        },
        768: {
            slidesPerView: 3, // Medium screens
        },
        1024: {
            slidesPerView: 4, // Large screens
        },
    },

    // Swiper Events
    on: {
        // Change dot styles on initialization
        init: function () {
            updateDotColors();
        },
        // Change dot styles whenever the active slide changes
        slideChange: function () {
            updateDotColors();
        },
    },
});

// Function to dynamically update dot colors
function updateDotColors() {
    // Get all pagination bullets
    const bullets = document.querySelectorAll('.swiper-pagination-bullet');

    bullets.forEach((bullet) => {
        // Change color for active and inactive dots
        if (bullet.classList.contains('swiper-pagination-bullet-active')) {
            bullet.style.backgroundColor = '#ffffff'; // Active dot color
        } else {
            bullet.style.backgroundColor = '#ffffff'; // Inactive dot color
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 800, // Animation duration in ms
        offset: 120, // Offset from the viewport
    });
});
