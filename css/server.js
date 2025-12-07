const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Configure your mail transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "YOUR_EMAIL@gmail.com",
      pass: "YOUR_APP_PASSWORD"  // use app password
    }
  });

  const mailOptions = {
    from: email,
    to: "YOUR_EMAIL@gmail.com",
    subject: `New contact from ${name}`,
    text: message
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send message." });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
