document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    const button = form.querySelector('button[type="submit"]');
    const originalButtonText = button.textContent;
    
    button.textContent = 'Sending...';
    button.disabled = true;
    
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Message sent successfully!');
            form.reset();
        } else {
            throw new Error('Network response was not ok');
        }
    })
    .catch(error => {
        alert('There was a problem sending your message. Please try again later.');
        console.error('Error:', error);
    })
    .finally(() => {
        button.textContent = originalButtonText;
        button.disabled = false;
    });
});