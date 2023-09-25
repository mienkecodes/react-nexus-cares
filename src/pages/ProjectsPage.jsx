import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";
import "./HomePage.css";


function ProjectsPage() {
  const { projects, isLoading, error } = useProjects();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
<div className="projects-container">
      <section id="hero">
        <div className="hero-content">
          <h1>Projects</h1>
        </div>
      </section>
      <section>
        <p>
          Have a look at current community initiatives, 
          <br></br>anywhere you could help out?
        </p>
      </section>
      <section id="project-list">
        {projects.map((projectData, key) => {
          return <ProjectCard key={key} projectData={projectData} />;
        })}
      </section>
    </div>
  );
}

export default ProjectsPage;
