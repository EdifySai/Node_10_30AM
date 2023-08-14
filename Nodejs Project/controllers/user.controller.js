var User = require('../models/user.model');
var bcrypt = require('bcryptjs');
var mailer = require('@sendgrid/mail');
mailer.setApiKey(process.env.SENDGRID_KEY);

exports.register = async (req, res) => {
    try {
        let { email, password, mobile, role, username } = req.body;
        var salt = bcrypt.genSaltSync(10);
        password = bcrypt.hashSync(password, salt);

        var newUser = new User({ email, password, mobile, role, username });


        const savedUser = await newUser.save();

        return res.status(201).json({ message: 'User registered successfully.', user: savedUser });
    } catch (error) {
        console.log('Error', error);
        return res.status(400).json({ error: 'Server error.' });
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required.' });
    }

    try {
        const user = await User.findOne({ email });

        if (user) {
            if (bcrypt.compareSync(password, user.password)) {
                return res.json({ message: `Welcome Back ${user.username}` });
            } else {
                return res.status(401).json({ error: 'Invalid Username or Password.' });
            }
        } else {
            return res.status(401).json({ error: 'Invalid credentials.' });
        }
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({ error: 'An error during login.' });
    }
}

exports.forgotPassword = async (req, res) => {
    console.log("email", req.body.email);
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            var info = {
                to: [req.body.email], // Change to your recipient
                from: 'saikumar@digital-edify.com', // Change to your verified sender
                subject: 'Passwor Change Request - FastCart.com',
                text: 'Forgot password',
                html: ' <a href="/">Click Here<a> to update the password',
            }
            mailer.send(info).then(
                response => {
                    console.log(response);
                    return res.status(200).json({ message: "email send" });
                },
                error => {
                    console.log(error);
                }
            )

        } else {
            return res.status(401).json({ error: 'This user does not exist in our db' });
        }
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({ error: 'An error during login.' });
    }
}
exports.changePassword = async (req, res) => {
    console.log("email", req.body.email);
    var salt = bcrypt.genSaltSync(10);
    var password = bcrypt.hashSync(req.body.password, salt);
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            var updateResponse = await User.findOneAndUpdate({ email: req.body.email }, { password: password });
            console.log("updateResponse", updateResponse);
            var info = {
                to: [req.body.email], // Change to your recipient
                from: 'saikumar@digital-edify.com', // Change to your verified sender
                subject: 'Passwor Change Request - FastCart.com',
                text: 'Forgot password',
                html: ' Password changes successfully',
            }
            mailer.send(info).then(
                response => {
                    console.log(response);
                    return res.status(200).json({ message: "email send" });
                },
                error => {
                    console.log(error);
                }
            )

        } else {
            return res.status(401).json({ error: 'This user does not exist in our db' });
        }
    } catch (err) {
        console.error('Error during change password:', err);
        res.status(500).json({ error: 'An error during change password.' });
    }
}
