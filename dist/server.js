const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();
const serveStatic = require('serve-static');
const port = process.env.PORT || 5000;
const nodemailer = require('nodemailer');
const history = require('connect-history-api-fallback');
const dotenv = require('dotenv');
dotenv.load();
const mailgunPass = process.env.MAILGUN_PASS;

app.use(history());
app.use(serveStatic(__dirname));

app.use(bodyParser.urlencoded({
	extended: true,
}));
app.use(bodyParser.json());

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

let transporter = nodemailer.createTransport({
    service: 'Mailgun',
    auth: {
        user: 'postmaster@sandboxd41e30f3953d4cd5a6bdf01a77f5a264.mailgun.org', // postmaster@sandbox[base64 string].mailgain.org
        pass: mailgunPass // You set this.
    }
});

router.use(function(req, res, next) {
    console.log("\nClient Connecting\n...".yellow);
    next(); // w/o this we'd be stuck in this router forevs.
});

app.route('/message/:sender/:senderEmail/:message').get(function(req,res) {
    let sender = req.params.sender.trim().split('+').join(' ')
    let message = req.params.message.trim().split('+').join(' ')

    message = {
        from: 'postmaster@sandboxd41e30f3953d4cd5a6bdf01a77f5a264.mailgun.org',
        to: 'jeremy.l.harmon@gmail.com', // comma separated list
        subject: 'A new message from your home page!',
        html: `<p>From: ${sender}</p> <p>E-mail: ${req.params.senderEmail}</p> <p>Message: ${message} </p>`
    };
    transporter.sendMail(message, function(error, info){
        if (error) {
            console.log(error);
            res.send(error);
        } else {
            console.log('Sent: ' + info.response);
            res.send("Success!");
        }
    });
});

app.listen(port);
console.log('server started '+ port);
