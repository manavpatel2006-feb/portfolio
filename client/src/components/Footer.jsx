import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <h2>Manav Patel</h2>

      <p>Aspiring Full Stack Developer | MERN Stack Developer</p>

      <div className="footer-icons">

        <a href="mailto:yourmail@gmail.com">
          <FaEnvelope />
        </a>

        <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>

        <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>

        <a href="https://instagram.com/YOUR_INSTAGRAM" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>

      </div>

      <p className="copy">
        © 2026 Manav Patel. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;