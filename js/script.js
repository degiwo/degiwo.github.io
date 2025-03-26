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
