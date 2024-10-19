import "./App.css";
import React, { useRef } from "react";
import NavbarComponent from "./components/NavbarComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import ProfileSection from "./components/ProfileSection";
import ProjectGrid from "./components/ProjectGrid";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Thoughts from "./components/Thoughts";
import Faqs from "./components/Faqs";
import Contact from "./components/Contact";

function App() {
  const projectsRef = useRef(null);

  return (
    <div className="App">
      <NavbarComponent text="Portfolio" />

      <div>
        <>
          <Header text="CREATIVE UI/UX DESIGNER & WEB DEVELOPER" />
          <ProfileSection
            text="I’m an India-based web designer and developer focused on creating 
            clean & user-friendly experiences. I love to design beautiful and 
            functional websites for clients and businesses."
          />
        </>
      </div>
      <div ref={projectsRef}>
        <>
          <Header text="PROJECTS" />
          <ProjectGrid />
        </>
      </div>
      <div style={{width: "95%", height: "2px", backgroundColor: "white", margin: "0 auto"}}></div>
      <div>
        <Thoughts />
      </div>
      <div style={{width: "95%", height: "2px", backgroundColor: "white", margin: "0 auto"}}></div>
      <div>
        <Faqs />
      </div>
      <div>
        <Contact />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
