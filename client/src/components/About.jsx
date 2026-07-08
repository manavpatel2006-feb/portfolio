import "./About.css";
import { Link } from "react-router-dom";
import { FaLaptopCode, FaCode, FaHeart } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">

      <h2>About Me</h2>

      <p className="about-text">
        Hello! I'm <span>Manav Patel</span>, an aspiring Full Stack Developer
        passionate about creating modern, responsive and user-friendly web
        applications using the MERN Stack. I enjoy solving real-world problems
        through code and continuously learning new technologies to improve my
        development skills.
      </p>

      <div className="about-cards">

        <Link to="/about/projects" className="about-card">

          <FaLaptopCode className="about-icon"/>

          <h3>5+</h3>

          <h4>Projects</h4>

          <p>
            Click to explore all the projects I have built and the technologies
            used in each project.
          </p>

        </Link>

        <Link to="/about/technologies" className="about-card">

          <FaCode className="about-icon"/>

          <h3>10+</h3>

          <h4>Technologies</h4>

          <p>
            Discover the technologies, frameworks and tools that I use to build
            modern web applications.
          </p>

        </Link>

        <Link to="/about/passion" className="about-card">

          <FaHeart className="about-icon"/>

          <h3>100%</h3>

          <h4>Passion</h4>

          <p>
            Learn about my coding journey, goals and why I love software
            development.
          </p>

        </Link>

      </div>

    </section>
  );
}

export default About;