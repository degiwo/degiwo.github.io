let currentLang = 'de';

function changeLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = currentLang;
    
    // Update all elements with data attributes
    document.querySelectorAll('[data-de][data-ru][data-zh][data-en]').forEach(element => {
        element.textContent = element.getAttribute(`data-${currentLang}`);
    });

    // Update placeholders
    document.querySelectorAll('[data-de-placeholder]').forEach(element => {
        element.placeholder = element.getAttribute(`data-${currentLang}-placeholder`);
    });
}

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email === '' || emailPattern.test(email);  // empty is valid since it's optional
}

document.getElementById('rsvp-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = event.target[0].value;
    const attendance = event.target[2].value;
    const email = event.target[3].value;

    if (!name || !attendance) {
        alert('Please fill out all required fields before submitting.');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address or leave it empty.');
        return;
    }

    alert(`Thank you, ${name}! Your RSVP has been received.`);
    event.target.reset();
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
const weddingDate = '2026-08-29T16:00:00';  // Wedding start time in German local time

function updateCountdown() {
    const now = new Date();
    // Convert both dates to German time
    const berlinTime = now.toLocaleString('en-US', { timeZone: 'Europe/Berlin' });
    const currentTime = new Date(berlinTime).getTime();
    const weddingTime = new Date(weddingDate).getTime();
    
    const distance = weddingTime - currentTime;

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
