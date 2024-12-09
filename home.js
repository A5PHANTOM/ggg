var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,  // Default to 2 cards per row
    spaceBetween: 0,    // No space between cards
    loop: true,         // Loop through slides
    navigation: {
        nextEl: '.swiper-button-next',  // Next button
        prevEl: '.swiper-button-prev'   // Previous button
    },
    autoplay: {
        delay: 4000,  // Auto slide every 4 seconds
        disableOnInteraction: false
    },
    breakpoints: {
        768: {
            slidesPerView: 2,  // On mobile, 2 cards per row
            spaceBetween: 0
        },
        1024: {
            slidesPerView: 4,  // On larger screens, 4 cards per row
            spaceBetween: 10   // Small space between cards on larger screens
        }
    }
});
