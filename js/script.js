let currentLang = 'de';

function changeLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = currentLang;
    
    // Update all elements with data attributes
    document.querySelectorAll('[data-de][data-ru][data-zh][data-en]').forEach(element => {
        element.textContent = element.getAttribute(`data-${currentLang}`);
    });
}

document.getElementById('rsvp-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = event.target[0].value;
    const email = event.target[1].value;
    const attendance = event.target[2].value;

    if (name && email && attendance) {
        alert(`Thank you, ${name}! Your RSVP has been received.`);
        event.target.reset();
    } else {
        alert('Please fill out all fields before submitting.');
    }
});

// Add smooth scroll handling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Countdown Timer
const weddingDate = new Date('2026-08-29T18:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();
