import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Hero.css";
import profile from "../assets/Gemini_Generated_Image_x6yo41x6yo41x6yo.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h4 className="hello">
          Hello 👋 I'm
        </h4>

        <h1 className="name">
          Manav Patel
        </h1>

        <h2 className="title">
          Aspiring Full Stack Developer
        </h2>

        <p className="desc">
          Passionate about creating modern and responsive MERN Stack applications.
        </p>

        <div className="hero-buttons">

          <a href="/hire" className="btn hire-btn">
            Hire Me
          </a>

          <a
            href="Professional-Resume manav.pdf"
            download
            className="btn resume-btn"
          >
            Download Resume
          </a>

        </div>
<div className="social-icons">

  <a
    href="https://www.instagram.com/i_am_manav_patel/?hl=en#"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram />
  </a>

  <a
    href="https://www.linkedin.com/in/manav-patel-096102381?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://github.com/manavpatel2006-feb"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub />
  </a>

</div>
      </div>

      <div className="hero-image">
        <img src={profile} alt="Manav Patel" />
      </div>

    </section>
  );
}

export default Hero;