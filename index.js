const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "build")));
app.use(cors());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// app.get("/contactUS", () => {
//   resizeBy.send("welcome");
// });

const transport = {
  host: "smtp.gmail.com", // smtp server host name
  port: 465, // smtp port
  secure: true, // true for all port using 465
  auth: {
    user: "mimsgh2018@gmail.com", // username email
    pass: "WilliamSackeyAnaman", // username password
  },
};

const transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

app.post("/api/form", (req, res) => {
  var fullname = req.body.fullname;
  var email = req.body.email;
  var subject = req.body.subject;
  var phoneNumber = req.body.phoneNumber;
  var message = req.body.message;
  var content = `fullname: ${fullname} \n email: ${email}  \n subject: ${subject}  \n phone: ${phoneNumber}  \n message: ${message} `;

  var mail = {
    from: fullname,
    to: "thinksopht@gmail.com, mimsgh2018@gmail.com", // Change to email address that you want to receive messages on
    subject: "New Message from Contact Form",
    text: content,
  };

  transporter.sendMail(mail, (err) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log("server at $(PORT)");
});
