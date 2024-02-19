<?php

//npm install nodemailer express body-parser
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Specify the email where you want to receive messages
    $to = "your@email.com";
    $subject = "New contact from $name";
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Headers to make email look nice in email clients
    $headers = "From: $name <$email>";

    // Sending the email
    if (mail($to, $subject, $email_content, $headers)) {
        // Redirect to a thank-you page or display a success message
        echo "Thank You! Your message has been sent.";
    } else {
        // Display an error message
        echo "Oops! Something went wrong, and we couldn't send your message.";
    }
} else {
    // Not a POST request, redirect or display an error
    echo "Oops! Something went wrong.";
}
?>
