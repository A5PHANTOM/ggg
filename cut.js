// // Function to check if an element is in the viewport
// function isElementInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

// // Function to handle scroll event
// function handleScroll() {
//     const containers = document.querySelectorAll('.breakfast-container, .dinner-container, .before-bed-container');
    
//     containers.forEach(container => {
//         if (isElementInViewport(container)) {
//             container.classList.add('animate');
//         }
//     });
// }

// // Add scroll event listener
// window.addEventListener('scroll', handleScroll);

// // Initial check on page load
// window.addEventListener('load', handleScroll);



//  // Apply toggle only on mobile screens
//  function checkScreenSize() {
//     const isMobile = window.innerWidth <= 768;  // Adjust if needed
//     document.querySelectorAll('.recipe-content').forEach(content => {
//         if (isMobile) {
//             content.classList.remove('visible');  // Start collapsed
//         } else {
//             content.classList.add('visible');  // Show content on desktop
//         }
//     });
// }

// // Run check on load and resize
// window.addEventListener('resize', checkScreenSize);
// window.addEventListener('load', checkScreenSize);

function toggleShoppingList() {
    var shoppingList = document.getElementById('shopping-list');
    if (shoppingList.style.display === "none" || shoppingList.style.display === "") {
        shoppingList.style.display = "block";
    } else {
        shoppingList.style.display = "none";
    }
}

function scrollToSection(sectionId) {
    const section = document.querySelector(`.${sectionId}-container`);
    if (section) {
        // Calculate the section's position and subtract the desired offset (e.g., 80px)
        const offset = 100; // Adjust this value as needed
        const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;

        // Smoothly scroll to the calculated position
        window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth'
        });
    }
}
