document.addEventListener('DOMContentLoaded', () => {
    // Initialize card animations with staggered delays
    document.querySelectorAll('.card-hover').forEach((card, index) => {
        card.style.setProperty('--order', index);
        card.style.animationDelay = `${index * 0.2}s`;
    });

    // Initialize image animations
    document.querySelectorAll('.animated-image').forEach((img, index) => {
        img.style.animationDelay = `${0.5 + index * 0.3}s`;
    });

    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('button[class*="md:hidden"]');
    const mobileMenu = document.querySelector('.hidden.md\\:flex.space-x-6');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        });
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenuButton.click();
                }
            }
        });
    });
});

// Parallax effect
window.addEventListener('scroll', () => {
    const hero = document.querySelector('section.py-20');
    if (hero) {
        hero.style.backgroundPositionY = `${window.scrollY * 0.3}px`;
    }
    
    // Add staggered delays to contact form inputs
    document.querySelectorAll('#contact form > *').forEach((el, i) => {
        el.style.setProperty('--i', i);
    });

    // Add staggered delays to techniques cards
    document.querySelectorAll('#techniques > div > div').forEach((card, i) => {
        card.style.animationDelay = `${i * 0.3 + 0.3}s`;
    });
});