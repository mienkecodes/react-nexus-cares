import "./LoginPage.css"; // Import your CSS styles here
import LoginForm from "../components/LoginForm";

function LoginPage() {
    return (
    <div className="login-page">
        <div className="login-container">
        <h1>Login</h1>
        <p>Welcome back! Please sign in to your account.</p>
        <LoginForm />
        </div>
    </div>
    );
}

export default LoginPage;