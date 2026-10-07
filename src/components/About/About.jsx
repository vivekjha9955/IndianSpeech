
import React from "react";
import "./About.css";
import SectionHeader from "../Common/SectionHeader";
import aboutImg from "../../assets/WhatsApp Image 2026-03-02 at 6.43.12 PM.jpeg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <SectionHeader
          tag="About Us"
          title="Hearing Care Clinic in Ranchi"
          subtitle="Professional hearing care, hearing tests, hearing aids, and speech therapy with compassionate support for every age group."
        />

        <div className="about__wrapper">
          <div className="about__image">
            <img
              src={aboutImg}
              alt="Indian Speech & Hearing Clinic in Ranchi"
            />
          </div>

          <div className="about__content">
            <h3>Trusted Audiologists for Hearing & Speech Care</h3>

            <p>
              Indian Speech & Hearing Clinic is a trusted hearing care clinic
              in Ranchi, dedicated to improving quality of life through expert
              hearing diagnosis, personalized hearing solutions, and
              compassionate support.
            </p>

            <p>
              With over 17 years of experience and 9000+ happy patients, we
              provide complete hearing tests, digital hearing aid fittings,
              speech therapy, and after-care services for children, adults,
              and seniors.
            </p>

            <p>
              Our clinic combines experienced audiologists, modern diagnostic
              technology, and globally trusted hearing aid brands to provide
              comfortable and effective hearing solutions tailored to each
              individual's needs.
            </p>

            <div className="about__highlights">
              {/* <div className="about__highlight-card">
                <h4>17+</h4>
                <span>Years of Excellence</span>
              </div> */}

              <div className="about__highlight-card">
                <h4>9000+</h4>
                <span>Happy Patients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

