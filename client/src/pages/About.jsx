import "./AboutDetails.css";
import { useParams, Link } from "react-router-dom";

function AboutDetails() {
  const { section } = useParams();

  const data = {
    projects: {
      title: "My Projects",
      subtitle: "Projects I've Built",
      description:
        "These projects showcase my frontend and full stack development skills.",

      items: [
        {
          title: "RailBook",
          description:
            "A railway ticket booking website with responsive UI and modern design.",
          tech: "React • Node.js • Express • MongoDB",
        },
        {
          title: "AI Clone",
          description:
            "An AI chatbot application using API integration.",
          tech: "React • JavaScript • API",
        },
        {
          title: "Bus Booking",
          description:
            "Online bus booking system with clean responsive interface.",
          tech: "React • CSS • JavaScript",
        },
        {
          title: "Weather App",
          description:
            "Live weather application using weather API.",
          tech: "HTML • CSS • JavaScript",
        },
        {
          title: "Air Services",
          description:
            "Modern airline landing page with responsive layout.",
          tech: "React • CSS",
        },
        {
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
        "These are the technologies and tools I use to build modern web applications.",

      items: [
        {
          title: "HTML5",
          description: "Semantic structure for modern websites.",
        },
        {
          title: "CSS3",
          description: "Responsive layouts, Flexbox, Grid and Animations.",
        },
        {
          title: "JavaScript",
          description: "Dynamic and interactive web development.",
        },
        {
          title: "React JS",
          description: "Component-based frontend development.",
        },
        {
          title: "Node.js",
          description: "Backend runtime environment.",
        },
        {
          title: "Express.js",
          description: "REST API development.",
        },
        {
          title: "MongoDB",
          description: "NoSQL database for scalable applications.",
        },
        {
          title: "Git",
          description: "Version control system.",
        },
        {
          title: "GitHub",
          description: "Repository hosting and collaboration.",
        },
        {
          title: "REST API",
          description: "Frontend and backend communication.",
        },
      ],
    },

    passion: {
      title: "My Passion",
      subtitle: "Why I Love Programming",
      description:
        "Programming is my passion. I love learning new technologies and building useful applications.",

      items: [
        {
          title: "Problem Solving",
          description:
            "I enjoy solving coding challenges and real-world problems.",
        },
        {
          title: "Continuous Learning",
          description:
            "Learning React, Node.js, MongoDB and new technologies every day.",
        },
        {
          title: "Building Projects",
          description:
            "Creating responsive and professional web applications.",
        },
        {
          title: "Career Goal",
          description:
            "Become a Professional Full Stack MERN Developer.",
        },
      ],
    },
  };

  const info = data[section];

  if (!info) {
    return (
      <div className="about-details">
        <h1 style={{ color: "white" }}>Page Not Found</h1>
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