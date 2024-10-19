import './Home.css';  // Import the CSS file

export function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Idea Tracker</h1>
      <div className="home-content">
        <section>
          <h2 className="home-subtitle">What is Idea Tracker?</h2>
          <p className="home-text">
            Idea Tracker is an innovative platform designed to help you capture and manage your creative ideas effortlessly. Whether you're brainstorming for a new project or simply want to store your thoughts for future reference, Idea Tracker makes it easy to stay organized and never lose a great idea again.
          </p>
        </section>
        <section>
          <h2 className="home-subtitle">Our Features</h2>
          <p className="home-text">
            - Easily submit and track your ideas.<br />
            - Organize your ideas by title and description.<br />
            - Secure your ideas with your personal account.<br />
            - Edit or remove ideas whenever you like.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Home;
