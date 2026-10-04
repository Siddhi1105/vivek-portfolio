import "./Experience.css";

const experiences = [
  {
    year: "2025",
    company: "Art and Space Studio",
    role: "Architectural Intern",
    description:
      "Worked on residential and commercial projects from concept development to construction documentation.",
  },
  {
    year: "2024",
    company: "Academic Design Studio",
    role: "Architecture Student",
    description:
      "Designed residential, commercial and public space projects while developing planning, drafting and presentation skills.",
  },
  {
    year: "2023",
    company: "NASA Space Settlement Design Competition",
    role: "Participant",
    description:
      "Participated in NASA International Space Settlement Design Competition with conceptual architectural proposals.",
  },
];

function Experience() {
  return (
    <section className="experience">
        <div className="experience-overlay"></div>
  <div className="experience-bg"></div>
      <div className="container">

        {/* Heading */}

        <div className="experience-heading">

      
          <h2>
            Experience
          </h2>

        </div>

        {/* Timeline */}

        <div className="experience-wrapper">

          {experiences.map((item, index) => (

            <div
              className="experience-item"
              key={index}
            >

              {/* YEAR */}

              <div className="experience-year">

                {item.year}

              </div>

              {/* TIMELINE */}

              <div className="experience-track">

                <span className="track-circle"></span>

                <span className="track-line"></span>

              </div>

              {/* CONTENT */}

              <div className="experience-content">

                <h3>

                  {item.company}

                </h3>

                <span>

                  {item.role}

                </span>

                <p>

                  {item.description}

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;