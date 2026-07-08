import React from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";


const projects = [
  {
    id: 1,
    title: "RailBook",
  
    description:
      "A railway ticket booking website with responsive UI and modern design.",
  },

  {
    id: 2,
    title: "AI Clone",
    
    description:
      "An AI chatbot application using API integration.",
  },

  {
    id: 3,
    title: "Bus Booking",
    
    description:
      "Online bus booking system with clean responsive interface.",
  },

  {
    id: 4,
    title: "Weather App",
    
    description:
      "Live weather application using weather API.",
  },

  {
    id: 5,
    title: "Air Services",
   
    description:
      "Modern airline landing page with responsive layout.",
  },

  {
    id: 6,
    title: "Portfolio Website",
   
    description:
      "Personal developer portfolio showcasing my skills and projects.",
  },
];


function Projects(){

  const navigate = useNavigate();


  return (

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


             


              <h2>
                {project.title}
              </h2>


              <p>
                {project.description}
              </p>



              <button
                className="project-btn"
                onClick={() => navigate(`/project/${project.id}`)}
              >
                View Details
              </button>


            </div>


          ))
        }


      </div>


    </section>

  );

}


export default Projects;