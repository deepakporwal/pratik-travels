/* ============================================
   PRATIK TRAVELS - JAVASCRIPT
   ============================================ */

// Set active navigation link
document.addEventListener('DOMContentLoaded', function() {
    // Navigation active link
    const currentLocation = location.pathname;
    const menuItems = document.querySelectorAll('.nav-menu a');
    
    menuItems.forEach(item => {
        const href = item.getAttribute('href');
        if (currentLocation.includes(href) || 
            (currentLocation === '/' && href === 'index.html')) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    // Initialize FAQ accordion
    initializeFAQ();
});

// ============================================
// CONTACT FORM HANDLING
// ============================================

function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formMessage = document.getElementById('formMessage');
    const submitBtn = document.getElementById('submitBtn');
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        tour: document.getElementById('tour').value,
        travelers: document.getElementById('travelers').value,
        dates: document.getElementById('dates').value.trim(),
        message: document.getElementById('message').value.trim(),
        newsletter: document.getElementById('newsletter').checked
    };

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
        showFormMessage('Please fill in all required fields.', 'error');
        return;
    }

    // Email validation
    if (!validateEmail(formData.email)) {
        showFormMessage('Please enter a valid email address.', 'error');
        return;
    }

    // Simulate form submission (in real scenario, this would send to server)
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    // Simulate API call
    setTimeout(() => {
        // Log form data (in production, send to backend)
        console.log('Form submitted with data:', formData);
        
        // Show success message
        showFormMessage(
            'Thank you for your message! We will get back to you within 24 hours.',
            'success'
        );

        // Reset form
        form.reset();
        
        // Reset button
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';

        // Clear message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);

    }, 1500);
}

function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ============================================
// FAQ ACCORDION
// ============================================

function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const heading = item.querySelector('h3');
        if (heading) {
            heading.addEventListener('click', () => {
                // Close other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
                
                // Update arrow
                const arrow = heading.textContent.includes('▼') ? '▶' : '▼';
                heading.textContent = heading.textContent.replace(/[▼▶]/, arrow);
            });
        }
    });
}

function toggleFaq(element) {
    const parent = element.parentElement;
    
    // Close all other FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== parent) {
            item.classList.remove('active');
            const h3 = item.querySelector('h3');
            if (h3) {
                h3.textContent = h3.textContent.replace('▼', '▶');
            }
        }
    });
    
    // Toggle current FAQ
    parent.classList.toggle('active');
    
    // Update arrow
    const arrow = element.textContent.includes('▼') ? '▶' : '▼';
    element.textContent = element.textContent.replace(/[▼▶]/, arrow);
}

// ============================================
// SMOOTH SCROLLING
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// SCROLL ANIMATION
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe package cards, feature items, etc.
document.querySelectorAll('.package-card, .feature-item, .testimonial-card, .team-member').forEach(el => {
    observer.observe(el);
});

// ============================================
// BOOKING BUTTON FUNCTIONALITY
// ============================================

const bookButtons = document.querySelectorAll('.btn-secondary');
bookButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get the tour name from the package card
        const packageCard = this.closest('.package-card');
        const tourName = packageCard.querySelector('h4').textContent;
        
        // Scroll to contact form and set tour field
        const contactSection = document.querySelector('.contact-section');
        if (contactSection) {
            const tourSelect = document.getElementById('tour');
            
            // Try to match the tour name to select value
            Array.from(tourSelect.options).forEach(option => {
                if (option.textContent.toLowerCase().includes(tourName.toLowerCase()) ||
                    tourName.toLowerCase().includes(option.textContent.toLowerCase())) {
                    option.selected = true;
                }
            });
            
            contactSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            // If not on contact page, redirect to contact page
            window.location.href = 'contact.html';
        }
    });
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add shadow on scroll
        if (scrollTop > 10) {
            navbar.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
}

// ============================================
// MODAL / POPUP FUNCTIONALITY
// ============================================

// Alert user before leaving if form has unsaved data
const form = document.getElementById('contactForm');
let formDirty = false;

if (form) {
    form.addEventListener('change', () => {
        formDirty = true;
    });

    form.addEventListener('submit', () => {
        formDirty = false;
    });

    window.addEventListener('beforeunload', (e) => {
        if (formDirty) {
            e.preventDefault();
            e.returnValue = '';
            return '';
        }
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Format phone number as user types
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 10) {
            value = value.slice(0, 10);
        }
        
        if (value.length > 0) {
            if (value.length <= 4) {
                value = value;
            } else if (value.length <= 7) {
                value = value.slice(0, 3) + '-' + value.slice(3);
            } else {
                value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6);
            }
        }
        e.target.value = value;
    });
}

// ============================================
// LAZY LOADING IMAGES (if needed in future)
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// PRINT FRIENDLY PAGE
// ============================================

function printPage() {
    window.print();
}

// ============================================
// SHARE FUNCTIONALITY
// ============================================

function shareOnSocialMedia(platform) {
    const pageTitle = document.title;
    const pageUrl = window.location.href;
    let shareUrl = '';

    switch(platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(pageTitle)}`;
            break;
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${encodeURIComponent(pageTitle + ' ' + pageUrl)}`;
            break;
        case 'email':
            shareUrl = `mailto:?subject=${encodeURIComponent(pageTitle)}&body=${encodeURIComponent(pageUrl)}`;
            break;
    }

    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}

// ============================================
// CONSOLE WELCOME MESSAGE
// ============================================

console.log('%cWelcome to Pratik Travels Ujjain!', 'font-size: 20px; color: #667eea; font-weight: bold;');
console.log('%cBest Tours & Travel Experiences', 'font-size: 14px; color: #764ba2;');
console.log('Website created with ❤️ for travel enthusiasts');
