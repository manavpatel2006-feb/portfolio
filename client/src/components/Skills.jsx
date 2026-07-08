import "./Skills.css";
import { Link } from "react-router-dom";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

function Skills() {
  const skills = [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
      slug: "html",
      level: "95%",
      desc: "Build semantic, responsive and SEO-friendly web pages.",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS3",
      slug: "css",
      level: "90%",
      desc: "Create modern, responsive and attractive user interfaces.",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
      slug: "javascript",
      level: "85%",
      desc: "Build interactive and dynamic web applications.",
    },
    {
      icon: <FaReact />,
      name: "React JS",
      slug: "react",
      level: "90%",
      desc: "Develop fast single-page applications using reusable components.",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      slug: "nodejs",
      level: "80%",
      desc: "Build scalable backend applications and REST APIs.",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
      slug: "express",
      level: "80%",
      desc: "Create secure APIs with routing and middleware.",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
      slug: "mongodb",
      level: "75%",
      desc: "Manage application data using NoSQL databases.",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
      slug: "git",
      level: "85%",
      desc: "Track code changes with version control.",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      slug: "github",
      level: "90%",
      desc: "Host projects and collaborate with developers.",
    },
  ];

  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>

      <p className="skills-subtitle">
        Technologies I use to build modern, responsive and scalable web
        applications.
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <Link
            to={`/skill/${skill.slug}`}
            className="skill-card"
            key={index}
          >
            <div className="skill-icon">{skill.icon}</div>

            <h3>{skill.name}</h3>

            <p className="skill-desc">{skill.desc}</p>

            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: skill.level }}
              ></div>
            </div>

            <span>{skill.level}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Skills;