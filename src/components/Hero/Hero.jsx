    // import "./Hero.css";

    // function Hero() {
    // return (
    //     <section className="hero">
    //     <div className="hero-bg"></div>
    //     <div className="hero-overlay"></div>

    //     <div className="container">
    //         <div className="hero-content">

    //         <p className="hero-role">
    //             ARCHITECT
    //         </p>

    //         <h1 className="hero-title">
    //             <span>VIVEK</span>
    //             <span>UDAY LAD</span>
    //         </h1>

    //         <p className="hero-tagline">
    //             Designing Meaningful Spaces.
    //         </p>

    //         <div className="hero-action">

    //             <a href="#projects" className="hero-btn">
    //             Explore Projects
    //             </a>

    //             <div className="hero-arrow">
    //             ↓
    //             </div>

    //         </div>

    //         </div>
    //     </div>
    //     </section>
    // );
    // }

    // export default Hero;


    import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-overlay"></div>

      <div className="hero-image"></div>

      <div className="container hero-container">

        <div className="hero-left">

          <span className="hero-role">
            ARCHITECT
          </span>

         <h1 className="hero-title">
  <span className="hero-line">VIVEK</span>
  <span className="hero-line"> UDAY LAD</span>
</h1>
          <p className="hero-desc">

            Designing meaningful spaces 
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="hero-btn">

              Explore Projects

            </a>

          </div>

          <div className="hero-scroll">

            <span></span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;