import "./SkillDetails.css";
import { useParams, Link } from "react-router-dom";
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

function SkillDetails() {
  const { skill } = useParams();

  const skills = {
    html: {
      icon: <FaHtml5 />,
      title: "HTML5",
      level: "95%",
      role: "Frontend Development",
      description:
        "HTML5 is the foundation of every website. I use semantic HTML to build responsive, SEO-friendly and accessible web pages.",
      experience: "Advanced",
      projects: [
        "Portfolio Website",
        "RailBook",
        "Landing Pages",
      ],
    },

    css: {
      icon: <FaCss3Alt />,
      title: "CSS3",
      level: "90%",
      role: "Frontend Styling",
      description:
        "I use CSS3, Flexbox, Grid and animations to build beautiful and responsive user interfaces.",
      experience: "Advanced",
      projects: [
        "Portfolio Website",
        "Animated UI",
        "Responsive Layouts",
      ],
    },

    javascript: {
      icon: <FaJs />,
      title: "JavaScript",
      level: "85%",
      role: "Programming Language",
      description:
        "JavaScript allows me to build dynamic websites, API integrations and interactive applications.",
      experience: "Intermediate",
      projects: [
        "Weather App",
        "AI Clone",
        "RailBook",
      ],
    },

    react: {
      icon: <FaReact />,
      title: "React JS",
      level: "90%",
      role: "Frontend Library",
      description:
        "React helps me build reusable components and fast single-page applications.",
      experience: "Advanced",
      projects: [
        "AI Clone",
        "Portfolio",
        "RailBook",
      ],
    },

    nodejs: {
      icon: <FaNodeJs />,
      title: "Node.js",
      level: "80%",
      role: "Backend Runtime",
      description:
        "Node.js helps me build backend applications, REST APIs and authentication systems.",
      experience: "Intermediate",
      projects: [
        "Backend API",
        "Authentication",
        "CRUD System",
      ],
    },

    express: {
      icon: <SiExpress />,
      title: "Express.js",
      level: "80%",
      role: "Backend Framework",
      description:
        "Express.js simplifies backend development with routing, middleware and APIs.",
      experience: "Intermediate",
      projects: [
        "REST API",
        "Login System",
        "Server Apps",
      ],
    },

    mongodb: {
      icon: <SiMongodb />,
      title: "MongoDB",
      level: "75%",
      role: "Database",
      description:
        "MongoDB is my preferred NoSQL database for scalable web applications.",
      experience: "Intermediate",
      projects: [
        "RailBook Database",
        "AI Clone",
        "Portfolio Backend",
      ],
    },

    git: {
      icon: <FaGitAlt />,
      title: "Git",
      level: "85%",
      role: "Version Control",
      description:
        "Git helps me manage source code, branches and collaborate with teams.",
      experience: "Advanced",
      projects: [
        "Portfolio",
        "RailBook",
        "AI Clone",
      ],
    },

    github: {
      icon: <FaGithub />,
      title: "GitHub",
      level: "90%",
      role: "Code Hosting",
      description:
        "GitHub is where I host projects, collaborate and maintain my portfolio.",
      experience: "Advanced",
      projects: [
        "Portfolio Repository",
        "AI Clone",
        "RailBook",
      ],
    },
  };

  const data = skills[skill];

  if (!data) {
    return (
      <h1 style={{ color: "white", textAlign: "center", marginTop: "100px" }}>
        Skill Not Found
      </h1>
    );
  }

  return (
    <div className="skill-details">

      <div className="skill-card">

        <div className="skill-icon-big">
          {data.icon}
        </div>

        <h1>{data.title}</h1>

        <h4>{data.role}</h4>

        <p>{data.description}</p>

        <h2>Professional Level</h2>

        <div className="progress">
          <div
            className="progress-bar"
            style={{ width: data.level }}
          ></div>
        </div>

        <h3>{data.level}</h3>

        <h2>Experience</h2>

        <p>{data.experience}</p>

        <h2>Projects Built</h2>

        <ul>
          {data.projects.map((project, index) => (
            <li key={index}>✔ {project}</li>
          ))}
        </ul>

        <Link to="/" className="back-btn">
          ← Back to Home
        </Link>

      </div>

    </div>
  );
}

export default SkillDetails;