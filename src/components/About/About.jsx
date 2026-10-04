// import "./About.css";

// import aboutImage from "../../assets/about/vivek.png";

// import autocad from "../../assets/software/autocad-logo.png";
// import sketchup from "../../assets/software/sketchup-logo.png";
// import lumion from "../../assets/software/lumion-logo.png";
// import rhino from "../../assets/software/rhino-logo.png";
// import photoshop from "../../assets/software/photoshop-logo.png";
// import indesign from "../../assets/software/indesign-logo.png";

// function About() {
//   return (
//     <section className="about" id="about">

//       <div className="container">

//         {/* TOP SECTION */}

//         <div className="about-wrapper">

//           {/* LEFT */}

//           <div className="about-left">

//             <div className="about-image">
//               <img
//                 src={aboutImage}
//                 alt="Vivek Uday Lad"
//               />
//             </div>

//           </div>

//           {/* RIGHT */}

//           <div className="about-content">

//             <span className="about-subtitle">
//               ABOUT ME
//             </span>

//             <h2 className="about-title">
//               Hello, I'm
//               <br />
//               Vivek Uday Lad
//             </h2>

//             <p>
//               I am an Architect passionate about creating
//               spaces that are functional, contextual and
//               meaningful.
//             </p>

//             <p>
//               Architecture, for me, is a journey of
//               understanding people, spaces and the
//               environment around us.
//             </p>

//             <p>
//               This portfolio reflects my academic work,
//               design explorations and experiences.
//             </p>

//           </div>

//         </div>

//         {/* FULL WIDTH SKILLS */}

//         <div className="about-skills">

//           <h4>Software Skills</h4>

//           <div className="skills-grid">

//             <div className="skill-item">
//               <img src={autocad} alt="AutoCAD" />
//               <span>AutoCAD</span>
//             </div>

//             <div className="skill-item">
//               <img src={sketchup} alt="SketchUp" />
//               <span>SketchUp</span>
//             </div>

//             <div className="skill-item">
//               <img src={lumion} alt="Lumion" />
//               <span>Lumion</span>
//             </div>

//             <div className="skill-item">
//               <img src={rhino} alt="Rhino" />
//               <span>Rhino</span>
//             </div>

//             <div className="skill-item">
//               <img src={photoshop} alt="Photoshop" />
//               <span>Photoshop</span>
//             </div>

//             <div className="skill-item">
//               <img src={indesign} alt="InDesign" />
//               <span>InDesign</span>
//             </div>

//           </div>

//           <a
//             href="/resume.pdf"
//             className="resume-btn"
//             target="_blank"
//             rel="noreferrer"
//           >
//             Download Resume
//           </a>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default About;

import "./About.css";
import "/Resume.pdf"
import aboutImage from "../../assets/about/vivek.png";

import autocad from "../../assets/software/autocad-logo.png";
import sketchup from "../../assets/software/sketchup-logo.png";
import lumion from "../../assets/software/lumion-logo.png";
import rhino from "../../assets/software/rhino-logo.png";
import photoshop from "../../assets/software/photoshop-logo.png";
import indesign from "../../assets/software/indesign-logo.png";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">


        {/* Main Layout */}
        <div className="about-wrapper">

          {/* Left */}
          <div className="about-left">
            <div className="about-image">
              <img
                src={aboutImage}
                alt="Vivek Uday Lad"
              />
            </div>
          </div>

          {/* Right */}
          <div className="about-content">

            <span className="about-subtitle">
              ABOUT ME
            </span>

            <h2 className="about-title">
              Hello, I'm <br />
              Vivek Uday Lad
            </h2>

            <p>
              I am an Architect passionate about creating
              spaces that are functional, contextual and
              meaningful.
            </p>

            <p>
              Architecture, for me, is a journey of
              understanding people, spaces and the
              environment around us.
            </p>

            <p>
              This portfolio reflects my academic work,
              design explorations and professional growth.
            </p>

          </div>

        </div>

        {/* Skills */}
        <div className="about-skills">

          <h4>SOFTWARE SKILLS</h4>

          <div className="skills-grid">

            <div className="skill-item">
              <img src={autocad} alt="AutoCAD"/>
              <span>AutoCAD</span>
            </div>

            <div className="skill-item">
              <img src={sketchup} alt="SketchUp"/>
              <span>SketchUp</span>
            </div>

            <div className="skill-item">
              <img src={lumion} alt="Lumion"/>
              <span>Lumion</span>
            </div>

            <div className="skill-item">
              <img src={rhino} alt="Rhino"/>
              <span>Rhino</span>
            </div>

            <div className="skill-item">
              <img src={photoshop} alt="Photoshop"/>
              <span>Photoshop</span>
            </div>

            <div className="skill-item">
              <img src={indesign} alt="InDesign"/>
              <span>InDesign</span>
            </div>

          </div>
<div className="about-buttons">

  <a
    href="https://heyzine.com/flip-book/17062bbc64.html"
    target="_blank"
    rel="noopener noreferrer"
    className="resume-btn"
  >
    Complete Portfolio
  </a>

  <a
    href="/Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="resume-btn"
  >
    View Resume
  </a>

  <a
    href="https://heyzine.com/flip-book/558bcc2607.html"
    target="_blank"
    rel="noopener noreferrer"
    className="resume-btn"
  >
    View Thesis
  </a>

</div>
        </div>

      </div>
    </section>
  );
}

export default About;