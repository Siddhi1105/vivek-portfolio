import "./ProjectList.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

import project1 from "../../assets/projects/project1.png";
import project2 from "../../assets/projects/project2.png";
import project3 from "../../assets/projects/project3.png";
import project4 from "../../assets/projects/project4.png";
import project5 from "../../assets/projects/project5.png";
import project6 from "../../assets/projects/project6.png";

const projects = [
  {
    id: "01",
    title: "Varnmaya",
    category: "Residential Bungalow Design",
    year: "2026",
    image: project1,
    slug: "varnmaya",
  },
  {
    id: "02",
    title: "Kaushalya Bhoomi",
    category: "Skill Development Centre",
    year: "2025",
    image: project2,
    slug: "kaushalya-bhoomi",
  },
  {
    id: "03",
    title: "Travest",
    category: "Tourist Facilitation Centre",
    year: "2025",
    image: project3,
    slug: "travest",
  },
  {
    id: "04",
    title: "Vana",
    category: "Residential Housing",
    year: "2024",
    image: project4,
    slug: "vana",
  },
  {
    id: "05",
    title: "Unity Enclave",
    category: "NASA Competition",
    year: "2024",
    image: project5,
    slug: "unity-enclave",
  },
  {
    id: "06",
    title: "ABCS",
    category: "Academic Project",
    year: "2023",
    image: project6,
    slug: "abcs",
  },
];

function ProjectList() {
  return (
    <section className="projects" id="projects">

      <div className="container">

        <div className="projects-header">

          <span className="projects-tag">
            SELECTED WORKS
          </span>

          <h2 className="projects-title">
            Projects
          </h2>

        </div>

        <div className="projects-wrapper">

          {projects.map((project) => (

            <article
              className="project-card"
              key={project.id}
            >

              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

                <div className="project-overlay"></div>

              </div>

              <div className="project-info">

                <div className="project-left">

                  <span className="project-number">
                    {project.id}
                  </span>

                  <div>

                    <h3>{project.title}</h3>

                    <p>{project.category}</p>

                  </div>

                </div>

                <div className="project-right">

                  <span className="project-year">
                    {project.year}
                  </span>

                  <Link
                    to={`/projects/${project.slug}`}
                    className="project-arrow"
                    aria-label={`View ${project.title}`}
                  >
                    <FaArrowRightLong />
                  </Link>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ProjectList;