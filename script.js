// RateMe Landing Page JavaScript
console.log('RateMe landing page loaded!');

// Typing animation for title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroHeading = document.querySelector('.hero-heading');
    if (heroHeading) {
        const originalText = heroHeading.textContent;
        typeWriter(heroHeading, originalText, 80);
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.hero-text, .email-form, .reviews-section'
    );
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Email form functionality
const emailForm = document.querySelector('.email-input-group');
const emailInput = document.querySelector('.email-input');
const submitButton = document.querySelector('.btn-primary');

if (emailForm && emailInput && submitButton) {
    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Form submission
    function handleSubmit() {
        const email = emailInput.value.trim();
        
        if (!email) {
            showError('Please enter your email address');
            return;
        }
        
        if (!isValidEmail(email)) {
            showError('Please enter a valid email address');
            return;
        }
        
        // Simulate form submission
        submitButton.textContent = 'Joining...';
        submitButton.disabled = true;
        
        setTimeout(() => {
            showSuccess('Welcome to RateMe! Check your email for updates.');
            emailInput.value = '';
            submitButton.textContent = 'Join Waitlist';
            submitButton.disabled = false;
        }, 2000);
    }

    // Error handling
    function showError(message) {
        // Remove existing error
        const existingError = document.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            color: #ef4444;
            font-size: 14px;
            margin-top: 8px;
            text-align: center;
        `;
        
        emailForm.parentNode.appendChild(errorDiv);
        
        // Remove error after 3 seconds
        setTimeout(() => {
            errorDiv.remove();
        }, 3000);
    }

    // Success handling
    function showSuccess(message) {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.textContent = message;
        successDiv.style.cssText = `
            color: #22c55e;
            font-size: 14px;
            margin-top: 8px;
            text-align: center;
            font-weight: 600;
        `;
        
        emailForm.parentNode.appendChild(successDiv);
        
        // Remove success after 5 seconds
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
    }

    // Event listeners
    submitButton.addEventListener('click', handleSubmit);
    
    emailInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    });
    
    emailInput.addEventListener('input', () => {
        // Remove error message when user starts typing
        const existingError = document.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
    });
}

// Button interactions
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple CSS
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add loading animation for page
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add loading CSS
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(loadingStyle); 