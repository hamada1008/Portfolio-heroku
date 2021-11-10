import nodemailer from "nodemailer";
import express from "express";
import {} from "dotenv/config";
const router = express.Router();

router.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      service: "hotmail",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAILPASSWORD,
      },
      tls: {
        ciphers: "SSLv3",
      },
    });
    let info = await transporter.sendMail({
      from: "portfolio.hamada@outlook.com",
      to: "oussamahamada@yahoo.com",
      subject: subject,
      text: "",
      html: `<b>Name:</b><span>&nbsp;${name}</span><br/><br/>
  <b>Email:</b><span>&nbsp;${email}</span><br/><br/>
  <b>Subject:</b><span>&nbsp;${subject}</span><br/><br/>
  <b>message:</b><p>${message}</p>
  `,
    });
    res.status(200).json({ status: "Mail sent" });
  } catch (err) {
    res.status(400).json({ status: "Mail not sent" });
    console.log(err);
  }
});

export default router;
