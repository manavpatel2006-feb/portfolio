import "./Hire.css";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Hire() {
  return (
    <section className="hire-page">

      <div className="hire-card">

        <h1>Manav Patel</h1>

        <h2>Full Stack Developer</h2>

        <p className="intro">
          Passionate MERN Stack Developer focused on building modern,
          responsive and user-friendly web applications.
        </p>

        <div className="hire-info">

          <div className="info-box">
            <FaEnvelope />
        <span>manav6738@gmail.com </span>
          </div>

          <div className="info-box">
            <FaPhone />
            <span>+91 97245 63650</span>
          </div>

          <div className="info-box">
            <FaMapMarkerAlt />
            <span>Ahmedabad, Gujarat, India</span>
          </div>

        </div>

        <h3>Technical Skills</h3>

        <div className="skills">

          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>MongoDB</span>
          <span>Git</span>
          <span>GitHub</span>

        </div>

        <h3>Projects</h3>

        <ul className="project-list">
          <li>🚌 Bus Booking System</li>
          <li>🌦 Weather App</li>
          <li>✈ Air Services</li>
          <li>💼 Personal Portfolio</li>
        </ul>

        <div className="hire-buttons">

          <a href="/Professional-Resume manav.pdf" download>
            Download Resume
          </a>

          <Link to="/">
            Back Home
          </Link>

        </div>

        <div className="socials">

          <a href="https://github.com/manavpatel2006-feb" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/manav-patel-096102381?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>

          <a href="https://www.instagram.com/i_am_manav_patel/?hl=en#" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hire;