import { Link } from "react-router-dom";
import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";
import "./HomePage.css";

function HomePage() {
  const { projects, isLoading, error } = useProjects();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
<article>
      <section id="hero">
        <div className="hero-content">
          <h1>Welcome to Nexus Care</h1>
          <p>Your platform for making a difference in your community.</p>
          {/* <Link to="/new-project" className="button">Start Fundraising</Link>
          <Link to="/projects" className="button">Explore Nexus Projects</Link> */}
        </div>
      </section>
      <break>
      </break>
      <div className="hero-content">
          
          <Link to="/new-project" className="button">Create your own cummunity initiative</Link>
        </div>
      <section>
      <p> Who would you like to help and how?</p>

      </section>

      <section id="project-list">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="project-cards">
            {projects.map((projectData, key) => {
              return <ProjectCard key={key} projectData={projectData} />;
            })}
          </div>
        </div>          
        <Link to="/projects" className="button">Explore Current and previous Nexus Care Projects</Link>

      </section>

      <section id="about">
        <div className="container">
          <h2>About Us</h2>
          <p>
            The nexus care helping hand app is created to help you support your community.
          </p>
          <Link to="/about" className="button">Learn More</Link>
        </div>
      </section>
    </article>
  );

}

export default HomePage;
