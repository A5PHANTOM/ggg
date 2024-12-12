// Wait for DOM to load before initializing the Swipers
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Full-Screen Swiper
    const fullScreenSwiper = new Swiper('.full-screen-swiper', {
        slidesPerView: 1,  // Show 1 card per slide on all screen sizes
        spaceBetween: 0,    // No space between cards
        loop: true,         // Loop through slides
        autoplay: {
            delay: 4000,  // Auto slide every 4 seconds
            disableOnInteraction: false  // Continue autoplay after interaction
        },
        navigation: {
            nextEl: null,  // No navigation buttons for full-screen swiper
            prevEl: null   // No navigation buttons for full-screen swiper
        }
    });

    const swiper = new Swiper('.my-swiper', {
        slidesPerView: 2,  // Default to 2 cards per row
        spaceBetween: 10,   // Small space between cards
        loop: true,         // Loop through slides
        navigation: {
            nextEl: '.swiper-button-next',  // Next button for swiper
            prevEl: '.swiper-button-prev'   // Previous button for swiper
        },
        autoplay: {
            delay: 4000,  // Auto slide every 4 seconds
            disableOnInteraction: false
        },
        breakpoints: {
            // Mobile view: 2 cards per slide
            320: {
                slidesPerView: 2,
                spaceBetween: 0  // Adjust space between cards on mobile
            },
            // Tablet view and up: 3 cards per slide
            768: {
                slidesPerView: 3,
                spaceBetween: 0  // Space between cards on tablets and larger
            },
            // Desktop view: 4 cards per slide
            1024: {
                slidesPerView: 4,
                spaceBetween: 0  // Space between cards on larger screens
            }
        }
    });
});
