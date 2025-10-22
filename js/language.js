// language.js
document.addEventListener('DOMContentLoaded', function() {
  // Language data
  const translations = {
    en: {
      home: 'Home',
      catalog: 'Catalog',
      about: 'About',
      contact: 'Contact',
      mybooks: 'My Books',
      events: 'Events',
      login: 'Login',
      register: 'Register',
      welcome: 'Welcome to Your Digital Library',
      browse: 'Browse Catalog'
    },
    kk: {
      home: 'Басты бет',
      catalog: 'Каталог',
      about: 'Біз туралы',
      contact: 'Байланыс',
      mybooks: 'Менің кітаптарым',
      events: 'Оқиғалар',
      login: 'Кіру',
      register: 'Тіркелу',
      welcome: 'Сіздің цифрлық кітапханаңызға қош келдіңіз',
      browse: 'Каталогты шолу'
    },
    ru: {
      home: 'Главная',
      catalog: 'Каталог',
      about: 'О нас',
      contact: 'Контакты',
      mybooks: 'Мои книги',
      events: 'События',
      login: 'Войти',
      register: 'Регистрация',
      welcome: 'Добро пожаловать в вашу цифровую библиотеку',
      browse: 'Просмотреть каталог'
    }
  };
  
  // Create language selector
  const langSelector = document.createElement('select');
  langSelector.id = 'languageSelector';
  langSelector.className = 'form-select form-select-sm ms-2';
  langSelector.style.width = 'auto';
  
  // Add language options
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'kk', name: 'Қазақша' },
    { code: 'ru', name: 'Русский' }
  ];
  
  languages.forEach(lang => {
    const option = document.createElement('option');
    option.value = lang.code;
    option.textContent = lang.name;
    langSelector.appendChild(option);
  });
  
  // Add to navbar
  const navbar = document.querySelector('.navbar .container .navbar-collapse .navbar-nav');
  if (navbar) {
    const listItem = document.createElement('li');
    listItem.className = 'nav-item';
    listItem.appendChild(langSelector);
    navbar.appendChild(listItem);
  }
  
  // Load saved language or default to English
  const savedLang = localStorage.getItem('language') || 'en';
  langSelector.value = savedLang;
  updateLanguage(savedLang);
  
  // Handle language change
  langSelector.addEventListener('change', function() {
    const selectedLang = this.value;
    updateLanguage(selectedLang);
    localStorage.setItem('language', selectedLang);
  });
  
  function updateLanguage(lang) {
    const texts = translations[lang];
    
    // Update navigation
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href) {
        const key = href.replace('.html', '').replace('/', '');
        if (texts[key]) {
          link.textContent = texts[key];
        }
      }
    });
    
    // Update hero section on homepage
    const welcomeHeading = document.querySelector('header h1');
    const browseBtn = document.querySelector('header .btn-light');
    
    if (welcomeHeading && texts.welcome) {
      welcomeHeading.textContent = texts.welcome;
    }
    
    if (browseBtn && texts.browse) {
      browseBtn.textContent = texts.browse;
    }
  }
});