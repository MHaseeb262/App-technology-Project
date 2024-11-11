const menuIcon = document.querySelector(".bar-icon");
const mobileNav = document.querySelector(".mobile-nav");
const crossNav = document.querySelector(".cross-icon");

// Events
menuIcon.addEventListener("click", () => {
    mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
});

crossNav.addEventListener("click", () => {
    mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
});