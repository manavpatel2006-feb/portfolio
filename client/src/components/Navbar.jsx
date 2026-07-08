import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Manav<span>.</span>
      </div>

      <ul className="nav-links">

        <li><a href="#home">Home</a></li>

        <li><a href="#about">About</a></li>

        <li><a href="#skills">Skills</a></li>

        <li><a href="#projects">Projects</a></li>

        <li><a href="#contact">Contact</a></li>

      </ul>

     <Link to="/resume" className="resume-btn">
  Resume
</Link> 

    </nav>
  );
}

export default Navbar;