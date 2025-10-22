// keyboard-nav.js
document.addEventListener('DOMContentLoaded', function() {
  const menuItems = document.querySelectorAll('.navbar-nav .nav-link');
  let currentIndex = -1;
  
  // Add tabindex to menu items for keyboard navigation
  menuItems.forEach((item, index) => {
    item.setAttribute('tabindex', '-1');
    item.addEventListener('focus', () => {
      currentIndex = index;
    });
  });
  
  // Handle keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      navigateMenu(1);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      navigateMenu(-1);
    }
  });
  
  function navigateMenu(direction) {
    if (menuItems.length === 0) return;
    
    // Update current index
    currentIndex = (currentIndex + direction + menuItems.length) % menuItems.length;
    
    // Focus the menu item
    menuItems[currentIndex].focus();
    
    // Add visual indicator
    menuItems.forEach(item => item.classList.remove('keyboard-focus'));
    menuItems[currentIndex].classList.add('keyboard-focus');
  }
});