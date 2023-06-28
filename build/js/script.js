function initApp() {
    const hamburgerBtn = document.querySelector('#hamburger-button');
    const mobileMenu = document.querySelector('#mobile-menu');

    function toggleView() {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    }

    hamburgerBtn.addEventListener('click',toggleView);
    mobileMenu.addEventListener('click',toggleView);
}

document.addEventListener('DOMContentLoaded',initApp); 