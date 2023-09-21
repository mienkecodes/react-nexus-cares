import { useNavigate } from "react-router-dom";
import { useState } from "react";
import postNewUser from "../api/post-user";
import postLogin from "../api/post-login";


function NewUserForm() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [formIsInvalid, setFormIsInvalid] = useState("");
  const [userDetails, setUserDetails] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    skills: "",
    availability: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormIsInvalid("");
    setErrorMessage("");
    if (userDetails.username && userDetails.password) {
      postNewUser(
        userDetails.first_name,
        userDetails.last_name,
        userDetails.email,
        userDetails.username,
        userDetails.password,
        userDetails.skills,
        userDetails.availability,
      )
        .then(() => {
          postLogin(userDetails.username, userDetails.password).then(
            (response) => {
              window.localStorage.setItem("token", response.token);
              navigate("/");
            }
          );
        })
        .catch((error) => {
          setErrorMessage(error.message.split(","));
        });
    } else {
      setFormIsInvalid("Please complete required fields.");
    }
  };

  return (
    <form id="create-user-form">
      <div>
        <label htmlFor="first_name">First Name:</label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          placeholder="First Name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="last_name">Surname:</label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          placeholder="Surname"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="your email address"
          onChange={handleChange}
        />
      </div>
      <div>
        <label
          htmlFor="username"
          className={formIsInvalid ? "error-message" : ""}>
          Username<span className={formIsInvalid ? "" : "hidden"}>*</span>:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className={formIsInvalid ? "error-message" : ""}>
          Password<span className={formIsInvalid ? "" : "hidden"}>*</span>:
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          onChange={handleChange}
        />
      </div>
      <div>
        <label
          htmlFor="skills"
          className={formIsInvalid ? "error-message" : ""}>
          Password<span className={formIsInvalid ? "" : "hidden"}>*</span>:
        </label>
        <input
          type="string"
          name="skills"
          id="skills"
          placeholder="What skills do you have to share and support our community?"
          onChange={handleChange}
        />
      </div>
      <div>
        <label
          htmlFor="availability"
          className={formIsInvalid ? "error-message" : ""}>
          Password<span className={formIsInvalid ? "" : "hidden"}>*</span>:
        </label>
        <input
          type="text"
          name="availability"
          id="availability"
          placeholder="What is your availability? Weeksdays, weekends, flexible?"
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="button" onClick={handleSubmit}>
        Create account
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

export default NewUserForm;
