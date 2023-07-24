var express = require('express');
var app = express();
var mailer = require('@sendgrid/mail');
mailer.setApiKey("");
app.use(express.json());
app.post("/register", function (req, res) {
    var email = req.body.email;

    var info = {
        to: email, // Change to your recipient
        from: 'saikumar@digital-edify.com', // Change to your verified sender
        subject: 'Registration Success - DigitalLync',
        html: '<strong>We are delighted to onboard you to the course.</strong>',
    }

    mailer.send(info).then(
        response => {
            console.log("RespoNSE", response);
            if (response[0].statusCode == 202) {
                res.send("success");
            }
        },
        error => {
            res.send(error.message)
        }
    )
});

app.listen(9011, function () {
    console.log("server started!");
});
