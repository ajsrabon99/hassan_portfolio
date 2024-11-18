// script.js
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll("#nav-menu a"); // Select all links in the nav menu

    // Function to open the navigation menu
    const openMenu = () => {
        navMenu.classList.add("open");
        menuIcon.classList.add("hidden"); // Hide the menu icon
        closeIcon.style.display = "block"; // Show the close icon
    };

    // Function to close the navigation menu
    const closeMenu = () => {
        navMenu.classList.remove("open");
        menuIcon.classList.remove("hidden"); // Show the menu icon
        closeIcon.style.display = "none"; // Hide the close icon
    };

    // Open the navigation menu when menu icon is clicked
    menuIcon.addEventListener("click", openMenu);

    // Close the navigation menu when close icon is clicked
    closeIcon.addEventListener("click", closeMenu);

    // Close the navigation menu when any link in the nav menu is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });
});
