import nodemailer from "nodemailer";

export const sendMail = async (req, res) => {
  const { name, email, mobile, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

   // await transporter.verify();//
    console.log("✅ SMTP Connected Successfully");

    // ==========================
    // 1. EMAIL TO YOU
    // ==========================
console.log("Request Received");
console.log(req.body);
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,

      subject: `📩 Portfolio Contact - ${subject}`,

      html: `
        <h2>New Contact Form</h2>

        <p><b>Name:</b> ${name}</p>

        <p><b>Email:</b> ${email}</p>

        <p><b>Mobile:</b> ${mobile}</p>

        <p><b>Subject:</b> ${subject}</p>

        <p><b>Message:</b></p>

        <p>${message}</p>
      `,
    });

    // ==========================
    // 2. THANK YOU EMAIL TO USER
    // ==========================

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,

      subject: "Thank You For Contacting Me",

      html: `
        <h2>Hello ${name},</h2>

        <p>Thank you for contacting me.</p>

        <p>Your message has been received successfully.</p>

        <p>I will reply to you as soon as possible.</p>

        <br>

        <h3>Regards,</h3>

        <h3>Manav Patel</h3>
      `,
    });

    res.json({
      success: true,
      message: "Email Sent Successfully",
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};