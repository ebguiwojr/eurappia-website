// Reveal elements when scrolling
window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll('.about, .featured-app');

    reveals.forEach((section) => {
        const windowHeight = window.innerHeight;
        const elementTop = section.getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
            section.classList.add('visible');
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    //alert('Script Loaded');  // Add this to verify the script runs
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function () {
       // alert('Hamburger clicked!');  // This must show when clicked
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');  // Animates the icon
    });
});
