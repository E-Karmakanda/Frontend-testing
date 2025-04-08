import React from "react";
import "./Login.css";

const Login = () => {
    return (
        <div className="Login-container">
            <h2>Admin Login</h2>
            <form>
                <div className="input-group">
                <label>Username:</label>
                <input type="text" placeholder="Enter your username" />
                </div>
                <div className="input-group">
                    <label>Password:</label>
                    <input type="password" placeholder="Enter your password" />
                </div>
                <div className="actions">
                    <button type="submit">Login</button>
                    <a href="a">Forgot Password?</a>
                </div>
            </form>
        </div>
    );
};

export default Login;