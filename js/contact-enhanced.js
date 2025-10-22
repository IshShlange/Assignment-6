// contact-enhanced.js
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = {
        name: document.getElementById('name')?.value || '',
        email: document.getElementById('email')?.value || '',
        subject: document.getElementById('subject')?.value || '',
        message: document.getElementById('message')?.value || ''
      };
      
      // Validate form
      if (!validateForm(formData)) return;
      
      // Show loading state
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      // Simulate AJAX submission
      setTimeout(() => {
        const success = Math.random() > 0.2; // 80% success rate for demo
        
        if (success) {
          showMessage('Message sent successfully! We\'ll get back to you soon.', 'success');
          contactForm.reset();
          if (typeof playSound === 'function') {
            playSound('success');
          }
        } else {
          showMessage('Sorry, there was an error sending your message. Please try again.', 'error');
          if (typeof playSound === 'function') {
            playSound('error');
          }
        }
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 1500);
    });
  }
  
  function validateForm(data) {
    if (!data.name || !data.email || !data.message) {
      showMessage('Please fill in all required fields.', 'error');
      return false;
    }
    
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!data.email.match(emailPattern)) {
      showMessage('Please enter a valid email address.', 'error');
      return false;
    }
    
    return true;
  }
  
  function showMessage(message, type) {
    // Remove existing messages
    const existingMsg = document.querySelector('.form-message');
    if (existingMsg) existingMsg.remove();
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message alert alert-${type === 'success' ? 'success' : 'danger'} mt-3`;
    messageDiv.textContent = message;
    
    // Add to form
    const form = document.querySelector('form');
    if (form) {
      form.appendChild(messageDiv);
      
      // Auto remove after 5 seconds
      setTimeout(() => {
        messageDiv.remove();
      }, 5000);
    }
  }
});