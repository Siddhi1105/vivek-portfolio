import { useParams, NavLink } from "react-router-dom";
import "./ProjectDetails.css";

import project1 from "../../assets/projects/project1.png";
import project2 from "../../assets/projects/project2.png";
import project3 from "../../assets/projects/project3.png";
import project4 from "../../assets/projects/project4.png";
import project5 from "../../assets/projects/project5.png";
import project6 from "../../assets/projects/project6.png";


/* ==========================================================
   PROJECT DATA
========================================================== */

const projects = {

  varnmaya: {
    title: "Varnmaya",
    category: "Residential Bungalow Design",
    image: project1,
  },

  "kaushalya-bhoomi": {
    title: "Kaushalya Bhoomi",
    category: "Skill Development Centre",
    image: project2,
  },

  travest: {
    title: "Travest",
    category: "Tourist Facilitation Centre",
    image: project3,
  },

  vana: {
    title: "Vana",
    category: "Residential Housing",
    image: project4,
  },

  "unity-enclave": {
    title: "Unity Enclave",
    category: "NASA Competition",
    image: project5,
  },

  abcs: {
    title: "ABCS",
    category: "Academic Project",
    image: project6,
  },

};


/* ==========================================================
   COMPONENT
========================================================== */

function ProjectDetails() {

  const { slug } = useParams();

  const project = projects[slug];


  /* ========================================================
     PROJECT NOT FOUND
  ======================================================== */

  if (!project) {

    return (
      <section className="project-not-found">

        <h2>Project not found</h2>

      </section>
    );

  }


  return (

    <section className="project-details">


      {/* ==================================================
          ANIMATED BACKGROUND
      ================================================== */}

      <div className="architecture-bg">

        <div className="grid-lines"></div>

        <div className="floating-line line-one"></div>

        <div className="floating-line line-two"></div>

        <div className="floating-line line-three"></div>

      </div>



      {/* ==================================================
          HEADER
      ================================================== */}

      <div className="project-details-header">

        <div className="project-heading">

          <h1>
            {project.title}
          </h1>

          <span>
            {project.category}
          </span>

        </div>

      </div>



      {/* ==================================================
          MAIN IMAGE
      ================================================== */}

      <div className="project-details-image">

        <img
          src={project.image}
          alt={project.title}
        />

      </div>



      {/* ==================================================
          PROJECT NAVIGATION
      ================================================== */}

      <nav className="project-tabs">


        {/* OVERVIEW */}

        <NavLink
          to={`/projects/${slug}`}
          end
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Overview
        </NavLink>


        {/* PLANS */}

        <NavLink
          to={`/projects/${slug}/plans`}
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Plans
        </NavLink>


        {/* ELEVATIONS */}

        <NavLink
          to={`/projects/${slug}/elevations`}
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Elevations
        </NavLink>


        {/* SECTIONS */}

        <NavLink
          to={`/projects/${slug}/sections`}
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Sections
        </NavLink>


        {/* 3D VIEWS */}

        <NavLink
          to={`/projects/${slug}/3d-views`}
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          3D Views
        </NavLink>

      </nav>



      {/* ==================================================
          PROJECT OVERVIEW
      ================================================== */}

      <div className="project-overview">

        <div className="overview-label">
          ABOUT THE PROJECT
        </div>


        <div className="overview-content">

          <h2>
            A study in space, material and
            architectural expression.
          </h2>

          <p>
            This project explores the relationship
            between built form, natural light and
            the surrounding environment.
          </p>

        </div>

      </div>


    </section>

  );

}


export default ProjectDetails;