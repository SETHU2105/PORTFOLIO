// Create and manage star particles
function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    
    // Random size between 1-3px for stars
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    
    // Random position
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    
    // Random twinkle animation duration
    star.style.animationDuration = `${Math.random() * 3 + 2}s`;
    
    // Random delay for twinkling
    star.style.animationDelay = `${Math.random() * 2}s`;
    
    return star;
}

function initStars() {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars-container';
    document.body.appendChild(starsContainer);
    
    // Create more stars for a denser sky (200 stars)
    for (let i = 0; i < 200; i++) {
        const star = createStar();
        starsContainer.appendChild(star);
    }
    
    // Add shooting stars periodically
    setInterval(() => {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        shootingStar.style.left = `${Math.random() * 100}vw`;
        shootingStar.style.top = `${Math.random() * 50}vh`;
        starsContainer.appendChild(shootingStar);
        
        // Remove shooting star after animation
        setTimeout(() => {
            shootingStar.remove();
        }, 1000);
    }, 5000);
}

// Initialize stars when the page loads
window.addEventListener('load', initStars);

// Add scroll reveal animation
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll); 