import "./AboutDetails.css";
import { useParams, Link } from "react-router-dom";
import {
  FaTrain,
  FaRobot,
  FaBus,
  FaCloudSun,
  FaPlane,
  FaUserTie,
  FaCode,
  FaHeart,
  FaLaptopCode,
} from "react-icons/fa";

function AboutDetails() {
  const { section } = useParams();

  const data = {
    projects: {
      title: "My Projects",
      subtitle: "Projects That Showcase My Skills",
      description:
        "These are the projects I have built while learning Full Stack Development.",

      items: [
        {
          icon: <FaTrain />,
          title: "RailBook",
          description:
            "A modern railway ticket booking website with responsive UI and booking features.",
          tech: "React • Node.js • Express • MongoDB",
        },

        {
          icon: <FaRobot />,
          title: "AI Clone",
          description:
            "AI chatbot with API integration capable of answering user queries.",
          tech: "React • JavaScript • AI API",
        },

        {
          icon: <FaBus />,
          title: "Bus Booking",
          description:
            "Online bus reservation website with responsive interface.",
          tech: "React • CSS • JavaScript",
        },

        {
          icon: <FaCloudSun />,
          title: "Weather App",
          description:
            "Live weather forecast application using Weather API.",
          tech: "HTML • CSS • JavaScript",
        },

        {
          icon: <FaPlane />,
          title: "Air Services",
          description:
            "Professional airline landing page with modern UI.",
          tech: "React • CSS",
        },

        {
          icon: <FaUserTie />,
          title: "Portfolio Website",
          description:
            "Personal developer portfolio showcasing my skills and projects.",
          tech: "React • CSS • JavaScript",
        },
      ],
    },

    technologies: {
      title: "Technologies",
      subtitle: "Technologies I Use",
      description:
        "These are the technologies and tools I use for Full Stack Development.",

      items: [
        {
          icon: <FaCode />,
          title: "HTML5",
          description: "Semantic structure for modern websites.",
        },

        {
          icon: <FaCode />,
          title: "CSS3",
          description: "Responsive layouts, Flexbox, Grid and animations.",
        },

        {
          icon: <FaCode />,
          title: "JavaScript",
          description: "Dynamic and interactive web development.",
        },

        {
          icon: <FaCode />,
          title: "React JS",
          description: "Component-based frontend development.",
        },

        {
          icon: <FaCode />,
          title: "Node.js",
          description: "Backend runtime environment.",
        },

        {
          icon: <FaCode />,
          title: "Express.js",
          description: "REST API development.",
        },

        {
          icon: <FaCode />,
          title: "MongoDB",
          description: "NoSQL database for scalable applications.",
        },

        {
          icon: <FaCode />,
          title: "Git",
          description: "Version control system.",
        },

        {
          icon: <FaCode />,
          title: "GitHub",
          description: "Repository hosting and collaboration.",
        },
      ],
    },
        passion: {
      title: "My Passion",
      subtitle: "Why I Love Programming",
      description:
        "Programming is more than just writing code for me. I enjoy solving problems, learning new technologies and building real-world applications.",

      items: [
        {
          icon: <FaHeart />,
          title: "Problem Solving",
          description:
            "I enjoy solving real-world coding problems with clean and efficient solutions.",
        },

        {
          icon: <FaLaptopCode />,
          title: "Building Projects",
          description:
            "I love creating responsive, modern and user-friendly web applications.",
        },

        {
          icon: <FaCode />,
          title: "Continuous Learning",
          description:
            "Every day I learn something new to become a better Full Stack Developer.",
        },

        {
          icon: <FaUserTie />,
          title: "Career Goal",
          description:
            "My goal is to become a Professional MERN Stack Developer and work on impactful software products.",
        },
      ],
    },
  };

  const info = data[section];

  if (!info) {
    return (
      <div className="about-details">
        <h1 style={{ color: "white", textAlign: "center", marginTop: "100px" }}>
          Page Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="about-details">
      <div className="about-details-card">

        <h1>{info.title}</h1>

        <h3>{info.subtitle}</h3>

        <p>{info.description}</p>

        <div className="details-grid">
          {info.items.map((item, index) => (
            <div className="detail-card" key={index}>

              <div className="card-icon">
                {item.icon}
              </div>

              <h2>{item.title}</h2>

              <p>{item.description}</p>

              {item.tech && (
                <div className="tech-box">
                  <strong>Tech Stack</strong>
                  <span>{item.tech}</span>
                </div>
              )}

            </div>
          ))}
        </div>

        <Link to="/" className="back-btn">
          ← Back to Home
        </Link>

      </div>
    </div>
  );
}

export default AboutDetails;