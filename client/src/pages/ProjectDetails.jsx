import React from "react";
import { useParams, Link } from "react-router-dom";
import "./ProjectDetails.css";


const projects = [
  {
    id: "1",
    title: "RailBook",
    description:
      "RailBook is a railway ticket booking web application designed to provide users with a simple and smooth booking experience. It includes a responsive user interface where users can search trains, view details and manage booking-related features.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB"
    ],
  },

  {
    id: "2",
    title: "AI Clone",
    description:
      "AI Clone is an AI chatbot application that provides intelligent responses using API integration. This project focuses on creating an interactive user experience with modern frontend development and AI-based features.",
    technologies: [
      "React",
      "JavaScript",
      "API"
    ],
  },

  {
    id: "3",
    title: "Bus Booking",
    description:
      "Bus Booking is an online transportation booking system that allows users to explore bus services and manage booking processes through a clean and responsive interface.",
    technologies: [
      "React",
      "CSS",
      "JavaScript"
    ],
  },

  {
    id: "4",
    title: "Weather App",
    description:
      "Weather App is a real-time weather application that provides current weather information using weather APIs. It helps users check weather conditions with a simple and user-friendly design.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
  },

  {
    id: "5",
    title: "Air Services",
    description:
      "Air Services is a modern airline landing page created with a responsive layout. The project focuses on attractive UI design, smooth user experience and mobile-friendly development.",
    technologies: [
      "React",
      "CSS"
    ],
  },

  {
    id: "6",
    title: "Portfolio Website",
    description:
      "This portfolio website showcases my skills, technologies and projects as a Full Stack Developer. It is designed with a modern responsive layout to present my work and professional journey.",
    technologies: [
      "React",
      "CSS",
      "JavaScript"
    ],
  },
];


function ProjectDetails(){

  const { project } = useParams();


  const selectedProject = projects.find(
    (item)=> item.id === project
  );


  if(!selectedProject){
    return (
      <h1 style={{color:"white"}}>
        Project Not Found
      </h1>
    );
  }


  return(

    <section className="project-details">

      <div className="project-details-container">


        


        <div className="project-details-content">


          <h1>
            {selectedProject.title}
          </h1>


          <p>
            {selectedProject.description}
          </p>


          <h2 className="tech-title">
            Technologies Used
          </h2>


          <div className="tech-list">

            {
              selectedProject.technologies.map(
                (tech,index)=>(
                  <span key={index}>
                    {tech}
                  </span>
                )
              )
            }

          </div>


          <Link 
            to="/"
            className="back-btn"
          >
            ← Back To Home
          </Link>


        </div>


      </div>


    </section>

  );

}


export default ProjectDetails;