import "./LoginPage.css"; // Import your CSS styles here
import LoginForm from "../components/LoginForm";
import NewUserForm from "../components/UserForm";

function LoginPage() {
    return (
    <div className="login-page">
        <div className="login-container">
        <h1>Login</h1>
        <p>Welcome back! Please sign in to your account.</p>
        <LoginForm />
        <h1>Or new here?</h1>
        <p>Please create a new account.</p>
        <NewUserForm />
        </div>
    </div>
    );
}

export default LoginPage;