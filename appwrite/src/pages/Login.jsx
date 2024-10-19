import { useState } from "react";
import { useUser } from "../lib/context/user";
import './Login.css';  // Import the CSS file

export function Login() {
  const user = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  return (
    <section className="login-container">
      <h1 className="login-title">Login</h1>
      <form className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          className="login-input"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="login-input"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <div className="login-actions">
          <button
            className="login-button"
            type="button"
            onClick={() => user.login(email, password)}
          >
            Login
          </button>
          <p className="login-register-text">
            If new, register <a href="/register" className="login-register-link">here</a>
          </p>
        </div>
      </form>
    </section>
  );
}