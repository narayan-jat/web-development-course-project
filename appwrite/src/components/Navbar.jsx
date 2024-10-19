import { useUser } from "../lib/context/user";
import './Navbar.css';  // Import the CSS file

function Navbar() {
  const user = useUser();

  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">Idea Tracker</a>
      <div className="navbar-user">
        {user.current ? (
          <>
            <span className="navbar-email">{user.current.email}</span>
            <button
              type="button"
              className="navbar-logout"
              onClick={() => user.logout()}
            >
              Logout
            </button>
          </>
        ) : (
          <a href="/login" className="navbar-login">Login</a>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
