const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/sendemail', (req, res) => {
    let transporter = nodemailer.createTransport({
        // Example with Gmail; for other services, check Nodemailer's documentation
        service: 'gmail',
        auth: {
            user: 'your.email@gmail.com',
            pass: 'yourpassword'
        }
    });

    const mailOptions = {
        from: req.body.email,
        to: 'your.email@gmail.com',
        subject: `New contact from ${req.body.name}`,
        text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.send('error'); // Or your custom error handling
        } else {
            console.log('Email sent: ' + info.response);
            res.send('success'); // Or redirect to a thank-you page
        }
    });
});

app.listen(3000, () => console.log('Server started on port 3000'));
