import { useState } from "react";
import { useUser } from "../lib/context/user";
import './Register.css';  // Import the CSS file

export function Register() {
  const user = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="register-container">
      <h1 className="register-title">Register</h1>
      <form className="register-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          className="register-input"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="register-input"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <div className="register-actions">
          <button
            className="register-button"
            type="button"
            onClick={() => user.register(email, password)}
          >
            Register
          </button>
          <p className="register-login-text">
            If already registered, login <a href="/login" className="register-login-link">here</a>
          </p>
        </div>
      </form>
    </section>
  );
}
