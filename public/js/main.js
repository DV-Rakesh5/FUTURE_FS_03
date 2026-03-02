// Global utilities and event handlers

// Show alert message
function showAlert(message, type = 'success') {
  const alertDiv = document.createElement('div');
  alertDiv.className = `alert alert-${type}`;
  alertDiv.textContent = message;
  
  const container = document.querySelector('.container') || document.body;
  container.insertBefore(alertDiv, container.firstChild);
  
  setTimeout(() => {
    alertDiv.remove();
  }, 5000);
}

// Smooth scroll for navigation
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});

// Form submission handler
function handleFormSubmit(e, endpoint) {
  e.preventDefault();
  
  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  
  fetch(`/api/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(result => {
    if (result.success) {
      showAlert(result.message, 'success');
      form.reset();
    } else {
      showAlert(result.error || 'An error occurred', 'error');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    showAlert('Failed to submit. Please try again.', 'error');
  });
}

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
  const navMenu = document.querySelector('nav ul');
  if (navMenu) {
    navMenu.classList.toggle('active');
  }
}
