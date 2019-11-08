// Read Credentials from file
//      For simpjas credentials locally. 
//      Substitute with your own credentials and save to a file referenced here. 
//      See the "secret.txt" file for a template of the structure of such a file.

// const filePath = "./secret.txt"
const filePath = "../globalConfig/credentials.txt"


var fs = require("fs");
var textFromFile = fs.readFileSync(filePath);

// Parse text from secret file
var mailObj = JSON.parse(textFromFile);

// Set up nodemailer and a so called transport
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: mailObj.mailFrom,
           pass: mailObj.password
       }
   });

// Configure email 
// Attachments needs to be configured!

const mailOptions = {
    from: mailObj.mailFrom,
    to: mailObj.mailTo,
    subject: 'Test av smtp',
    html: '<p>Some text</p>', // mail body in HTML
    attachments: [
        {   // filename and content type is derived from path
            path: './secret.txt'
        },
        {   // use URL as an attachment
            filename: 'Test av URL attachment',
            path: 'https://i.vimeocdn.com/portrait/33840844_640x640'
        }
    ]
};

transporter.sendMail(mailOptions, function (err, info) {
    if (err){
        console.log(err)
    } else {
        console.log(info);
    }
});

