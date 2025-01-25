document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButton = document.getElementById('scrollToTopButton');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menuIcon');
    const navbarLinks = document.getElementById('navbarLinks');

    menuIcon.addEventListener('click', () => {
        navbarLinks.classList.toggle('show');
    });
});