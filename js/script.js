// ====================================
// MOBILE MENU TOGGLE
// ====================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close menu when a link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ====================================
// FORM HANDLING
// ====================================

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const budgetInput = document.getElementById('budget');
const budgetValue = document.getElementById('budgetValue');

// Update budget display
if (budgetInput) {
    budgetInput.addEventListener('input', (e) => {
        const value = parseInt(e.target.value);
        budgetValue.textContent = '$' + value.toLocaleString();
    });
}

// Handle form submission
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name').trim();
        const email = formData.get('email').trim();
        const message = formData.get('message').trim();

        // Basic validation
        if (!name || !email || !message) {
            showMessage('Please fill in all required fields.', 'error');
            return;
        }

        // Email validation
        if (!isValidEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Simulate form submission (in a real app, you'd send this to a server)
        submitForm(formData);
    });
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Form submission handler
function submitForm(formData) {
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Simulate API call with setTimeout
    setTimeout(() => {
        // In a real application, you would send the data to a server
        // Example: fetch('/api/contact', { method: 'POST', body: formData })
        
        // For now, we'll just show a success message
        const name = formData.get('name');
        showMessage(`Thank you, ${name}! I'll get back to you soon.`, 'success');

        // Reset form
        contactForm.reset();
        budgetValue.textContent = '$0';

        // Restore button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1500);
}

// Show form message
function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;

    // Auto-hide message after 5 seconds
    setTimeout(() => {
        formMessage.className = 'form-message';
    }, 5000);
}

// ====================================
// SMOOTH SCROLL HIGHLIGHTING
// ====================================

// Highlight active nav link based on scroll position
window.addEventListener('scroll', () => {
    updateActiveNavLink();
});

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

// ====================================
// ANIMATION ON SCROLL
// ====================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and items
document.querySelectorAll('.project-card, .timeline-item, .edu-item, .skill-tag').forEach(el => {
    observer.observe(el);
});

// ====================================
// ADD FADE-IN ANIMATION CLASS
// ====================================

// Add CSS for fade-in animation dynamically if not in stylesheet
if (!document.querySelector('style[data-animations]')) {
    const style = document.createElement('style');
    style.setAttribute('data-animations', 'true');
    style.textContent = `
        .fade-in {
            animation: fadeInUp 0.6s ease-out forwards;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .nav-menu a.active {
            color: #3498db;
            border-bottom: 2px solid #3498db;
            padding-bottom: 0.5rem;
        }
    `;
    document.head.appendChild(style);
}

// ====================================
// FORM FIELD VALIDATION ON INPUT
// ====================================

if (contactForm) {
    // Email field validation
    const emailField = document.getElementById('email');
    if (emailField) {
        emailField.addEventListener('blur', () => {
            if (emailField.value && !isValidEmail(emailField.value)) {
                emailField.style.borderColor = '#e74c3c';
            } else {
                emailField.style.borderColor = '#ddd';
            }
        });
    }

    // Required field validation
    const requiredFields = contactForm.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        field.addEventListener('blur', () => {
            if (!field.value.trim()) {
                field.style.borderColor = '#e74c3c';
            } else {
                field.style.borderColor = '#ddd';
            }
        });
    });
}

// ====================================
// ACCESSIBILITY ENHANCEMENTS
// ====================================

// Improve keyboard navigation
document.addEventListener('DOMContentLoaded', () => {
    // Add focus styles to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, select, textarea');
    
    interactiveElements.forEach(element => {
        element.addEventListener('focus', () => {
            element.style.outline = '2px solid #667eea';
            element.style.outlineOffset = '2px';
        });

        element.addEventListener('blur', () => {
            element.style.outline = 'none';
        });
    });
});

// ====================================
// PRINT FUNCTIONALITY
// ====================================

// Allow printing of the page
window.addEventListener('beforeprint', () => {
    // Optional: Add any pre-print modifications here
});

// ====================================
// LOCAL STORAGE FOR FORM DATA
// ====================================

// Save form data to local storage as user types
if (contactForm) {
    const formInputs = contactForm.querySelectorAll('input, textarea, select');

    // Load saved data
    formInputs.forEach(input => {
        const saved = localStorage.getItem(`form-${input.name}`);
        if (saved) {
            if (input.type === 'checkbox') {
                input.checked = saved === 'true';
            } else {
                input.value = saved;
            }
        }

        // Save on change
        input.addEventListener('change', () => {
            if (input.type === 'checkbox') {
                localStorage.setItem(`form-${input.name}`, input.checked);
            } else {
                localStorage.setItem(`form-${input.name}`, input.value);
            }
        });
    });

    // Clear saved data on successful submission
    const originalSubmitHandler = contactForm.onsubmit;
    contactForm.addEventListener('submit', () => {
        formInputs.forEach(input => {
            localStorage.removeItem(`form-${input.name}`);
        });
    });
}

// ====================================
// PERFORMANCE OPTIMIZATION
// ====================================

// Lazy load images (if added in future)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

console.log('Portfolio website loaded successfully!');
