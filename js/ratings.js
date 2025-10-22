// ratings.js
document.addEventListener('DOMContentLoaded', function() {
  // Create star rating HTML
  function createStarRating(rating = 0) {
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
      const filled = i <= rating ? '★' : '☆';
      starsHtml += `<span class="star" data-rating="${i}">${filled}</span>`;
    }
    return `<div class="star-rating" data-rating="${rating}">${starsHtml}</div>`;
  }
  
  // Add ratings to book cards
  const bookCards = document.querySelectorAll('.card');
  bookCards.forEach(card => {
    const ratingHtml = createStarRating();
    const cardBody = card.querySelector('.card-body');
    if (cardBody) {
      const ratingElement = document.createElement('div');
      ratingElement.className = 'book-rating mt-2';
      ratingElement.innerHTML = ratingHtml;
      cardBody.appendChild(ratingElement);
    }
  });
  
  // Handle star clicks
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('star')) {
      const star = e.target;
      const rating = parseInt(star.getAttribute('data-rating'));
      const ratingContainer = star.closest('.star-rating');
      
      // Update visual rating
      const stars = ratingContainer.querySelectorAll('.star');
      stars.forEach((s, index) => {
        s.textContent = index < rating ? '★' : '☆';
      });
      
      // Save rating
      ratingContainer.setAttribute('data-rating', rating);
      
      // Play sound
      if (typeof playSound === 'function') {
        playSound('click');
      }
    }
  });
});