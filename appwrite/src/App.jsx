import { UserProvider } from "./lib/context/user";
import { IdeasProvider } from "./lib/context/ideas";
import { Ideas } from "./pages/Ideas";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import "./App.css"; // Import the CSS file
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  const isLoginPage = window.location.pathname === "/login";

  return (
    <div className="app-container">
      <Router>
        <UserProvider>
          <IdeasProvider>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/register" element={<Register/>}></Route>
              <Route path="/ideas" element={<Ideas/>}></Route>
            </Routes>
          </IdeasProvider>
        </UserProvider>
      </Router>
    </div>
  );
}
