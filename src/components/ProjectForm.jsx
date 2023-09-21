import { useNavigate } from "react-router-dom";
import { useState } from "react";
import postProject from "../api/post-project";

function ProjectForm() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [formIsInvalid, setFormIsInvalid] = useState("");
  const [projectDetails, setProjectDetails] = useState({
    title: "",
    description: "",
    goal: "",
    image: "",
    is_open: true,
    date_created: new Date()
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setProjectDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormIsInvalid("");
    setErrorMessage("");
    if (
      projectDetails.title &&
      projectDetails.description &&
      projectDetails.goal
    ) {
      postProject(projectDetails)
        .then((response) => {
          navigate(`/project/${response.id}/`);
        })
        .catch((error) => {
          setErrorMessage(error.message.split(","));
        });
    } else {
      setFormIsInvalid("Please complete required fields.");
    }
  };

  return (
    <form id="create-project-form">
      <div>
        <label htmlFor="title" className={formIsInvalid ? "error-message" : ""}>
          Project Title<span className={formIsInvalid ? "" : "hidden"}>*</span>:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title of your community project"
          onChange={handleChange}
        />
      </div>
      <div>
        <label
          htmlFor="description"
          className={formIsInvalid ? "error-message" : ""}>
          Description<span className={formIsInvalid ? "" : "hidden"}>*</span>:
        </label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Who could we help and how? What skills do we need?"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="goal" className={formIsInvalid ? "error-message" : ""}>
          Goal<span className={formIsInvalid ? "" : "hidden"}>*</span>:
        </label>
        <input
          type="float"
          id="goal"
          name="goal"
          placeholder="number of volunteer hours needed"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="url"
          id="image"
          name="image"
          placeholder="https://image-link"
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="button" onClick={handleSubmit}>
        Create Project
      </button>
      <div className="error-message">
        {Object.values(errorMessage).map((error, key) => (
          <p key={key}>Error: {error}</p>
        ))}
      </div>
      <p className="error-message">{formIsInvalid}</p>
    </form>
  );
}

export default ProjectForm;
