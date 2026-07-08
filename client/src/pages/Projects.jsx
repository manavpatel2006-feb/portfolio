import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "RailBook",
    image: "/images/railbook.png",
    description:
      "A railway ticket booking website with responsive UI and modern design.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB"
    ],
  },

  {
    id: 2,
    title: "AI Clone",
    image: "/images/aiclone.png",
    description:
      "An AI chatbot application using API integration.",
    technologies: [
      "React",
      "JavaScript",
      "API"
    ],
  },

  {
    id: 3,
    title: "Bus Booking",
    image: "/images/bus.png",
    description:
      "Online bus booking system with clean responsive interface.",
    technologies: [
      "React",
      "CSS",
      "JavaScript"
    ],
  },

  {
    id: 4,
    title: "Weather App",
    image: "/images/weather.png",
    description:
      "Live weather application using weather API.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
  },

  {
    id: 5,
    title: "Air Services",
    image: "/images/air.png",
    description:
      "Modern airline landing page with responsive layout.",
    technologies: [
      "React",
      "CSS"
    ],
  },

  {
    id: 6,
    title: "Portfolio Website",
    image: "/images/portfolio.png",
    description:
      "Personal developer portfolio showcasing my skills and projects.",
    technologies: [
      "React",
      "CSS",
      "JavaScript"
    ],
  },
];


function Projects(){
  console.log("Projects loaded");
  return(
    <section className="projects" id="projects">

      <h1 className="heading">
        My <span>Projects</span>
      </h1>


      <div className="project-container">

        {
          projects.map((project)=>(

            <div 
              className="project-card" 
              key={project.id}
            >

              <img 
                src={project.image}
                alt={project.title}
              />


              <h2>
                {project.title}
              </h2>


              <p>
                {project.description}
              </p>

<a
  href={`/project/${project.id}`}
  className="project-btn"
>
  View Details
</a>


            </div>

          ))
        }

      </div>

    </section>
  )
}


export default Projects;