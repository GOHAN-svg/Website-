// Wait for window load to hide the loading screen and display main content
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  const mainContent = document.getElementById('main-content');
  setTimeout(() => {
    loadingScreen.style.display = 'none';
    mainContent.classList.remove('hidden');
  }, 1500); // Delay to show the loading screen for 1.5 seconds
});

// Toggle the mobile menu when hamburger button is clicked
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
