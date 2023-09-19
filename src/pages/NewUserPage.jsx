import NewUserForm from "../components/UserForm";
import "./LoginPage.css"; // Import your CSS styles here


function NewUserPage() {
  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Create an Account</h1>
        <p>Welcome! Please fill out the form to create your account.</p>
        <NewUserForm />
      </div>
    </div>
  );
}

export default NewUserPage;