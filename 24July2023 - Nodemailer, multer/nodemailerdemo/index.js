var mailer = require('@sendgrid/mail');
mailer.setApiKey("");
var info = {
    to: ['aparnav2527@gmail.com', 'saikumar@digital-edify.com', 'harikapuli95@gmail.com', 'dandenavya1999@gmail.com'], // Change to your recipient
    from: 'saikumar@digital-edify.com', // Change to your verified sender
    subject: 'Next Email - Node.js Email Sender',
    text: 'Hi, I am sending this email from sendgrid node mailer demo application',
    html: '<strong>Hi, I am sending this email from sendgrid node mailer demo application</strong>',
}
mailer.send(info).then(
    response => {
        console.log(response);
    },
    error => {
        console.log(error);
    }
)
