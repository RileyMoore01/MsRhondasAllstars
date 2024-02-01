// Install nodemailer to run this script
// npm install nodemailer

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { name, email, subject, message } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail', // Use your preferred service
        auth: {
            user: 'msrhondasallstars@gmail.com@gmail.com', // Your email
            pass: 'your-password' // Your email password
        }
    });

    let mailOptions = {
        from: email,
        to: 'your-email@gmail.com', // Email where you want to receive messages
        subject: subject,
        text: `Message from: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.send('error'); // Or your specific error handling
        } else {
            console.log('Email sent: ' + info.response);
            res.send('sent');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
