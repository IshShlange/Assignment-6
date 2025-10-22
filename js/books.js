// Book data structure
const bookLibrary = {
  books: [
    {
      id: 1,
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      category: "Programming",
      image: "images/book1.jpg",
      rating: 0
    },
    {
      id: 2,
      title: "Clean Code",
      author: "Robert C. Martin",
      category: "Programming",
      image: "images/book2.jpg",
      rating: 0
    },
    // Add more books as needed
  ],
  
  // Filter books by category
  filterByCategory: function(category) {
    return this.books.filter(book => book.category === category);
  },
  
  // Search books by title or author
  search: function(query) {
    const lowerQuery = query.toLowerCase();
    return this.books.filter(book => 
      book.title.toLowerCase().includes(lowerQuery) || 
      book.author.toLowerCase().includes(lowerQuery)
    );
  },
  
  // Update book rating
  updateRating: function(bookId, rating) {
    const book = this.books.find(b => b.id === bookId);
    if (book) {
      book.rating = rating;
      // In a real app, save to localStorage or backend
      this.saveToStorage();
    }
  },
  
  // Save to localStorage
  saveToStorage: function() {
    localStorage.setItem('bookLibrary', JSON.stringify(this.books));
  },
  
  // Load from localStorage
  loadFromStorage: function() {
    const stored = localStorage.getItem('bookLibrary');
    if (stored) {
      this.books = JSON.parse(stored);
    }
  }
};

// Initialize book library
bookLibrary.loadFromStorage();

// Enhanced search functionality
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('input[type="text"]');
  const searchButton = document.querySelector('.btn-primary');
  
  if (searchInput && searchButton) {
    searchButton.addEventListener('click', function() {
      const query = searchInput.value.trim();
      if (query) {
        const results = bookLibrary.search(query);
        displaySearchResults(results);
      }
    });
    
    // Also search on Enter key
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        searchButton.click();
      }
    });
  }
  
  function displaySearchResults(results) {
    const booksGrid = document.querySelector('.books-grid') || document.querySelector('.row.g-4');
    if (!booksGrid) return;
    
    // Clear existing content (except in catalog where we might want to filter)
    if (!window.location.pathname.includes('catalog.html')) {
      booksGrid.innerHTML = '';
    }
    
    // Use higher-order functions to process results
    results.map(book => createBookCard(book))
           .forEach(card => booksGrid.appendChild(card));
    
    // If no results, show message
    if (results.length === 0) {
      const noResults = document.createElement('div');
      noResults.className = 'col-12 text-center';
      noResults.textContent = 'No books found matching your search.';
      booksGrid.appendChild(noResults);
    }
  }
  
  function createBookCard(book) {
    const col = document.createElement('div');
    col.className = 'col-sm-6 col-md-4 col-lg-3';
    
    col.innerHTML = `
      <div class="card h-100 text-center shadow-sm">
        <img src="${book.image}" class="card-img-top" alt="${book.title}">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-text">${book.author}</p>
          <span class="badge bg-secondary">${book.category}</span>
          <div class="book-rating mt-2" data-book-id="${book.id}">
            ${createStarRating(book.rating)}
          </div>
          <button class="btn btn-success btn-sm mt-2">Read Now</button>
        </div>
      </div>
    `;
    
    return col;
  }
  
  function createStarRating(rating) {
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
      const filled = i <= rating ? '★' : '☆';
      starsHtml += `<span class="star" data-rating="${i}">${filled}</span>`;
    }
    return starsHtml;
  }
});