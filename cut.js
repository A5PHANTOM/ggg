// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function handleScroll() {
    const containers = document.querySelectorAll('.breakfast-container, .dinner-container, .before-bed-container');
    
    containers.forEach(container => {
        if (isElementInViewport(container)) {
            container.classList.add('animate');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check on page load
window.addEventListener('load', handleScroll);
