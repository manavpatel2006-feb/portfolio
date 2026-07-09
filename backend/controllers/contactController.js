import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMail = async (req, res) => {
  const { name, email, mobile, subject, message } = req.body;

  try {
    // Admin Email
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "manav6738@gmail.com",
      subject: `📩 ${subject}`,
      html: `
        <h2>New Contact</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mobile:</b> ${mobile}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    // Thank You Email
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: email,
      subject: "Thank You",
      html: `
        <h2>Hello ${name}</h2>

        <p>Thank you for contacting me.</p>

        <p>I will reply as soon as possible.</p>

        <br>

        <b>Manav Patel</b>
      `,
    });

    res.json({
      success: true,
      message: "Email Sent Successfully",
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};