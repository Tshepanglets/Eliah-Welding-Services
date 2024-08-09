document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;

    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Thank you for your message!');
            form.reset();
        } else {
            alert('There was a problem with your submission.');
        }
    }).catch(error => {
        alert('There was a problem with your submission.');
    });
});

