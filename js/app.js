// document.getElementById("contact-form").addEventListener("submit", function(event){
//     event.preventDefault();
//     var formData = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         subject: document.getElementById("subject").value,
//         message: document.getElementById("message").value
//     };
//     // Send this data to your server using fetch or XMLHttpRequest
//     fetch('/send-email', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//     })
//     .then(response => response.json())
//     .then(data => alert("Email sent successfully!"))
//     .catch((error) => {
//         console.error('Error:', error);
//         alert("Error sending email.");
//     });
// });

function hidePictures() {
    var divs = document.getElementsByClassName('toggle-div');

    for (var i = 0; i < divs.length; i++) {
        if (divs[i].style.display === 'none') {
            divs[i].style.display = '';
        } else {
            divs[i].style.display = 'none';
        }
    }
}

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlide");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}
