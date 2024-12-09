var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4, // Display exactly 4 cards on larger screens
    spaceBetween: 10, // Spacing between cards
    loop: true, // Enable looping
    navigation: {
        nextEl: '.swiper-button-next', // Next button
        prevEl: '.swiper-button-prev'  // Previous button
    },
    autoplay: {
        delay: 4000, // Slide automatically every 4 seconds
        disableOnInteraction: false
    },
    breakpoints: {
        768: {
            slidesPerView: 2, // Show 2 cards per row on smaller screens
            spaceBetween: 10
        },
        1024: {
            slidesPerView: 4, // Show 4 cards per row on larger screens
            spaceBetween: 10
        }
    }
});
