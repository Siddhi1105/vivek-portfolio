import "./Contact.css";

import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

function Contact() {

  return (

    <section className="contact">

      <div className="contact-overlay"></div>

      <div className="contact-image"></div>

      <div className="container contact-container">

        {/* LEFT */}

        <div className="contact-left">

          <span className="contact-tag">

            CONTACT

          </span>

          <h2 className="contact-title">

            <span>Let's Design</span>

            <span>Something</span>

            <span className="gold">
              Beautiful.
            </span>

          </h2>

          <p className="contact-text">

            Whether it's a residential project,
            architectural collaboration or simply
            a conversation about design,
            I'd love to hear from you.

          </p>

          <div className="contact-details">

            <a
              href="mailto:viveklad011@gmail.com"
              className="contact-item"
            >

              <HiOutlineMail />

              <span>

                vivekudaylad07@gmail.com

              </span>

            </a>

            <a
              href="tel:+91 9370120978"
              className="contact-item"
            >

              <FiPhone />

              <span>

                +91 91128 29369

              </span>

            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >

              <FaLinkedinIn />

              <span>

                LinkedIn

              </span>

            </a>

          </div>

        </div>

        {/* RIGHT */}

        <div className="contact-right"></div>

      </div>

    </section>

  );

}

export default Contact;