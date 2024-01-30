const nodemailer = require("nodemailer");
require("dotenv").config();

// Create a transporter object
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// Set up email data
let mailOptions = {
  from: process.env.EMAIL, // Sender address
  to: "rj1804567@gmail.com", // List of receivers
  subject: "Customer Feedback", // Subject line
  text: "We would love to hear your feedback!", // Plain text body
  // html: '<b>We would love to hear your feedback!</b>' // HTML body
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Message sent: %s", info.messageId);
});
