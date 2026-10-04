import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProjectGallery.css";


/* =========================================
   PROJECT DATA
========================================= */

const projects = {
  varnmaya: {
    title: "Varnmaya",
    category: "Residential Bungalow Design",
    folder: "varnmaya_assets",
  },

  "kaushalya-bhoomi": {
    title: "Kaushalya Bhoomi",
    category: "Skill Development Centre",
    folder: "kaushalyabhoomi_assets",
  },

  travest: {
    title: "Travest",
    category: "Tourist Facilitation Centre",
    folder: "travest_assets",
  },

  vana: {
    title: "Vana",
    category: "Residential Housing",
    folder: "vana_assets",
  },

  "unity-enclave": {
    title: "Unity Enclave",
    category: "NASA Competition",
    folder: "unityenclave_assets",
  },

  abcs: {
    title: "ABCS",
    category: "Academic Project",
    folder: "abcs_assets",
  },
};


/* =========================================
   LOAD ALL PROJECT ASSETS

   IMPORTANT:
   Your actual folder is "Pro_assests"
========================================= */

const allAssets = import.meta.glob(
  "../../assets/Pro_assests/**/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);


function ProjectGallery() {

  const { slug, type } = useParams();

  const project = projects[slug];

  const [currentImage, setCurrentImage] = useState(0);


  /* =========================================
     PAGE TITLES
  ========================================= */

  const typeNames = {
    plans: "Plans",
    elevations: "Elevations",
    sections: "Sections",
    "3d-views": "3D Views",
  };


  /* =========================================
     ACTUAL FOLDER NAMES
  ========================================= */

  const folderNames = {
    plans: "plans",
    elevations: "elevations",
    sections: "sections",
    "3d-views": "views",
  };


  const pageTitle = typeNames[type] || "Project";


  /* =========================================
     FIND IMAGES
  ========================================= */

  const images = Object.entries(allAssets)
    .filter(([path]) => {

      const lowerPath = path.toLowerCase();

      const projectFolder =
        project?.folder?.toLowerCase();

      const actualFolder =
        folderNames[type]?.toLowerCase();


      if (!projectFolder || !actualFolder) {
        return false;
      }


      const projectMatch =
        lowerPath.includes(projectFolder);


      const folderMatch =
        lowerPath.includes(`/${actualFolder}/`);


      return projectMatch && folderMatch;

    })
    .sort(([pathA], [pathB]) =>
      pathA.localeCompare(pathB)
    )
    .map(([, image]) => image);


  /* =========================================
     RESET IMAGE
  ========================================= */

  useEffect(() => {

    setCurrentImage(0);

  }, [slug, type]);


  /* =========================================
     AUTOMATIC SLIDESHOW
     EVERY 3 SECONDS
  ========================================= */

  useEffect(() => {

    if (images.length <= 1) {
      return;
    }


    const interval = setInterval(() => {

      setCurrentImage((previous) =>
        (previous + 1) % images.length
      );

    }, 3000);


    return () => {
      clearInterval(interval);
    };

  }, [images.length]);


  /* =========================================
     PROJECT NOT FOUND
  ========================================= */

  if (!project) {

    return (
      <div className="gallery-error">

        <h1>Project Not Found</h1>

        <Link to="/projects">
          Back to Projects
        </Link>

      </div>
    );

  }


  return (

    <main className="project-gallery">


      {/* =====================================
          HEADER
      ===================================== */}

      <div className="gallery-header">

        <div className="gallery-heading">

          <h1>{project.title}</h1>

          <span>{project.category}</span>

        </div>

        <p>{pageTitle}</p>

      </div>


      {/* =====================================
          NAVIGATION
      ===================================== */}

      <div className="gallery-navigation">

        <Link
          to={`/projects/${slug}`}
          className="gallery-nav-link"
        >
          Overview
        </Link>


        <Link
          to={`/projects/${slug}/plans`}
          className={`gallery-nav-link ${
            type === "plans" ? "active" : ""
          }`}
        >
          Plans
        </Link>


        <Link
          to={`/projects/${slug}/elevations`}
          className={`gallery-nav-link ${
            type === "elevations" ? "active" : ""
          }`}
        >
          Elevations
        </Link>


        <Link
          to={`/projects/${slug}/sections`}
          className={`gallery-nav-link ${
            type === "sections" ? "active" : ""
          }`}
        >
          Sections
        </Link>


        <Link
          to={`/projects/${slug}/3d-views`}
          className={`gallery-nav-link ${
            type === "3d-views" ? "active" : ""
          }`}
        >
          3D Views
        </Link>

      </div>


      {/* =====================================
          IMAGE SLIDESHOW
      ===================================== */}

      {images.length > 0 ? (

        <section className="gallery-viewer">


          {/* PREVIOUS BUTTON */}

          <button
            className="gallery-arrow gallery-prev"
            onClick={() => {

              setCurrentImage((previous) =>
                previous === 0
                  ? images.length - 1
                  : previous - 1
              );

            }}
            aria-label="Previous image"
          >
            ←
          </button>


          {/* IMAGES */}

          <div className="gallery-image-wrapper">

            {images.map((image, index) => (

              <img
                key={image}
                src={image}
                alt={`${project.title} ${pageTitle} ${index + 1}`}
                className={`gallery-image ${
                  index === currentImage
                    ? "visible"
                    : ""
                }`}
              />

            ))}

          </div>


          {/* NEXT BUTTON */}

          <button
            className="gallery-arrow gallery-next"
            onClick={() => {

              setCurrentImage((previous) =>
                (previous + 1) % images.length
              );

            }}
            aria-label="Next image"
          >
            →
          </button>


          {/* IMAGE COUNTER */}

          <div className="gallery-counter">

            <span>
              {String(currentImage + 1).padStart(2, "0")}
            </span>

            <span className="counter-line"></span>

            <span>
              {String(images.length).padStart(2, "0")}
            </span>

          </div>


        </section>

      ) : (

        <section className="gallery-empty">

          <p>
            No {pageTitle.toLowerCase()} images found.
          </p>

        </section>

      )}

    </main>

  );
}


export default ProjectGallery;