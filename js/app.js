document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault();
    var formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };
    // Send this data to your server using fetch or XMLHttpRequest
    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => alert("Email sent successfully!"))
    .catch((error) => {
        console.error('Error:', error);
        alert("Error sending email.");
    });
});
