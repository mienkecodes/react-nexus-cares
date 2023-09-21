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
          <h1>Welcome to Nexus Cares</h1>
          <p>Your platform for making a difference.</p>
          {/* <Link to="/new-project" className="button">Start Fundraising</Link>
          <Link to="/projects" className="button">Explore Nexus Projects</Link> */}
        </div>
      </section>
      <div className="hero-content">
          
          <Link to="/new-project" className="button">Start Fundraising</Link>
          <Link to="/projects" className="button">Explore Nexus Projects</Link>
        </div>
      <section>

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
      </section>

      <section id="about">
        <div className="container">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            eget justo non justo volutpat egestas in non nisl. Vivamus vel
            massa eu ipsum sagittis commodo. Nullam eget tellus justo. Sed
            vestibulum, purus in mollis bibendum, nunc libero pretium ex,
            quis fringilla purus quam vel nulla. Proin rhoncus malesuada
            metus a vehicula.
          </p>
          <Link to="/about" className="button">Learn More</Link>
        </div>
      </section>
    </article>
  );

}

export default HomePage;
