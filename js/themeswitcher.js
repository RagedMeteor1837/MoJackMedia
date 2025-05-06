// This script manages the light/dark theme toggle functionality for the website.
// It checks for a saved theme preference in localStorage and applies it on page load.
// The user's preference is saved to localStorage whenever the theme is toggled, ensuring the selected theme persists across sessions.


// Get the theme toggle checkbox
const toggle = document.getElementById('themeToggle');

// Check localStorage for a saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode'); // Apply dark mode if saved
  toggle.checked = true; // Set the toggle to checked
}

// Add event listener for theme toggle
toggle.addEventListener('change', () => {
  if (toggle.checked) {
    document.body.classList.add('dark-mode'); // Enable dark mode
    localStorage.setItem('theme', 'dark'); // Save preference to localStorage
  } else {
    document.body.classList.remove('dark-mode'); // Disable dark mode
    localStorage.setItem('theme', 'light'); // Save preference to localStorage
  }
});