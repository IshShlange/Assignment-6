// effects.js
// Sound effects (using free sound URLs)
const soundEffects = {
  click: new Audio('https://assets.mixkit.co/active_storage/sfx/247/247-preview.mp3'),
  success: new Audio('https://assets.mixkit.co/active_storage/sfx/257/257-preview.mp3'),
  error: new Audio('https://assets.mixkit.co/active_storage/sfx/249/249-preview.mp3')
};

// Play sound function
function playSound(type) {
  if (soundEffects[type]) {
    soundEffects[type].currentTime = 0;
    soundEffects[type].play().catch(e => console.log('Audio play failed:', e));
  }
}

// Animation functions
function animateElement(element, animation) {
  element.style.animation = 'none';
  setTimeout(() => {
    element.style.animation = `${animation} 0.5s ease`;
  }, 10);
}

// Add animations to buttons
document.addEventListener('DOMContentLoaded', function() {
  // Add click animations to all buttons
  const buttons = document.querySelectorAll('button, .btn');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      animateElement(this, 'pulse');
      playSound('click');
    });
  });
  
  // Add hover animations to cards
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
});