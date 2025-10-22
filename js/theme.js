// js/theme.js
document.addEventListener('DOMContentLoaded', function() {
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme') || 'day';
  applyTheme(savedTheme);
  
  // Create theme toggle button
  const themeToggle = document.createElement('button');
  themeToggle.id = 'themeToggle';
  themeToggle.className = 'btn btn-outline-light ms-2';
  themeToggle.innerHTML = savedTheme === 'day' ? '🌙' : '☀️';
  themeToggle.title = `Switch to ${savedTheme === 'day' ? 'night' : 'day'} mode`;
  
  // Add to navbar
  const navbar = document.querySelector('.navbar .container .navbar-collapse .navbar-nav');
  if (navbar) {
    const listItem = document.createElement('li');
    listItem.className = 'nav-item';
    listItem.appendChild(themeToggle);
    navbar.appendChild(listItem);
  }
  
  // Theme toggle functionality
  themeToggle.addEventListener('click', function() {
    const currentTheme = document.body.classList.contains('night-theme') ? 'night' : 'day';
    const newTheme = currentTheme === 'day' ? 'night' : 'day';
    
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    themeToggle.innerHTML = newTheme === 'day' ? '🌙' : '☀️';
    themeToggle.title = `Switch to ${newTheme === 'day' ? 'night' : 'day'} mode`;
  });
  
  function applyTheme(theme) {
    if (theme === 'night') {
      document.body.classList.add('night-theme');
    } else {
      document.body.classList.remove('night-theme');
    }
  }
});