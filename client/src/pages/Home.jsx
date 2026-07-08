import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h3>Hello, I'm</h3>
        <h1>Manav Patel</h1>

        <h2>Full Stack Developer</h2>

        <p>
          I am a passionate Full Stack Developer who loves building modern,
          responsive and user-friendly web applications using React, Node.js,
          Express and MongoDB.
        </p>

        <div className="home-buttons">
          <a
            href="/resume.pdf"
            download="Manav_Patel_Resume.pdf"
            className="btn"
          >
            Download Resume
          </a>

          <Link to="/projects" className="btn btn-outline">
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;