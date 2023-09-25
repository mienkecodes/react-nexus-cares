import React from "react";
import "./AboutPage.css"; // Import your CSS styles here

function AboutUsPage() {
  return (
    <div className="about-us-container">
      <section id="hero">
        <div className="hero-content">
          <h1>ABOUT US</h1>
          
        </div>
      </section>

      <section id="mission-vision">
        <div className="container">
          <div className="mission">

          <p>
            Nexus Care is an innovative, not-for-profit organization caring for
            the northern suburbs of Brisbane and beyond. Since opening the
            doors to the original Everton Park site in 2011, Nexus Care has
            become known around the city for its high-quality care programs and
            services. Increasing demand for the charity has continued to grow
            year upon year, and in early May 2022, a second site in Sandgate
            opened. Nexus Care uses people-focused and evidence-based services to
            empower individuals and their families. The charity reaches out to
            our local community, helping to relieve poverty and distress by
            mobilizing volunteers around high-quality, sustainable care
            programs. We work in partnership with other organizations, businesses,
            and the government. Inspired by our faith in Christ, Nexus Care is
            passionate about seeing people journey towards wholeness and finding
            a fresh start in life. 



          </p>
            <h2>WHAT WE DO:</h2>
            <p>
              Some of our running projects, how we currently help our community.
            </p>
            {/* Button for "WHAT WE DO" link */}
            <a
              href="https://www.nexuscare.com.au/fsfp"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              FRESH START FOOD PROGRAM
            </a>
            <a
              href="https://www.nexuscare.com.au/brekky-clubs"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              BREKKY CLUBS
            </a>
            <a
              href="https://www.nexuscare.com.au/career-coaching"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              CAREER COACHING SERVICES
            </a>
            <a
              href="https://www.nexuscare.com.au/emergency-financial-relief"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              EMERGENCY FINANCIAL RELIEF
            </a>
          </div>
          <div className="vision">
            <h2>REPORTING THE GOOD STUFF</h2>
            <p>
              Since 2011, Nexus Care has been hard at work helping vulnerable
              people in Brisbane. Take a read of our latest reports to see a
              snapshot of our work.
            </p>
            {/* Button for "REPORTING THE GOOD STUFF" link */}
            <a
              href="https://example.com/reporting-good-stuff"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              2021 Annual Report
            </a>
            <a
              href="https://example.com/reporting-good-stuff"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              4PG DONOR REPORT
            </a>
          </div>
        </div>
      </section>

      <section id="team">
        <div className="container">
          {/* <h2>OUR TEAM</h2>
          <div className="team-member">
            <img src="/team-member1.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>CEO</p>
          </div>
          <div className="team-member">
            <img src="/team-member2.jpg" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>COO</p>
          </div>
          Add more team members as needed */}
        </div>
      </section>
    </div>
  );
}

export default AboutUsPage;
