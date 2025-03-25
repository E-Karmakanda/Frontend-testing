import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AdminLogin({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email === "admin@example.com" && password === "admin123") {
      onLogin();  
      toast.success("Login successful!", { position: "top-center" });
      navigate("/admin", { replace: true });
    } else {
      toast.error("Invalid credentials", { position: "bottom-center" });
    }
  };

  return (
    <div className="login-container">
    <h2 className="login-container__form-title">Log in with</h2>
    
    <div className="login-container__social-login social-login">
      <button className="social-login__social-button social-login__social-button--google">
        <i className="fa-brands fa-google social-login__social-icon"></i> Google
      </button>
      <button className="social-login__social-button social-login__social-button--apple">
        <i className="fa-brands fa-apple social-login__social-icon"></i> Apple
      </button>
    </div>

    <p className="login-container__separator separator"><span>or</span></p>
    
    <form onSubmit={handleSubmit} className="login-container__login-form login-form">
      <div className="login-form__input-wrapper">
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="login-form__input-field" 
          placeholder="Username or email address" 
          required 
        />
        <i className="material-symbols-rounded login-form__icon">mail</i>
      </div>
      <div className="login-form__input-wrapper">
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="login-form__input-field" 
          placeholder="Password" 
          required 
        />
        <i className="material-symbols-rounded login-form__icon">lock</i>
      </div>

      <a href="#" className="login-form__forgot-pass-link">Forgot Password?</a>
      <button className="login-form__login-button" type="submit">
        Log In
      </button>
    </form>

    <p className="login-container__signup-text">Don't have an account? <a href="#">Signup now</a></p>
  </div>
  );
}

export default AdminLogin;
