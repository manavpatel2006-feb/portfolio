import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      const response = await fetch(
        "https://portfolio-backend-dfr4.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            mobile: formData.mobile,
            subject: "Portfolio Contact",
            message: formData.message,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("✅ Message Sent Successfully");

        setFormData({
          name: "",
          email: "",
          mobile: "",
          message: "",
        });
      } else {
        alert(data.message || "Failed to send message");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Server Error");
    }

    setLoading(false);
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <p>Have a project idea or want to work together? Feel free to contact me.</p>

      <form className="contact-form" onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="mobile"
          placeholder="Your Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          pattern="[0-9]{10}"
          maxLength={10}
          required
        />

        <textarea
          rows="6"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>

      </form>
    </section>
  );
}

export default Contact;