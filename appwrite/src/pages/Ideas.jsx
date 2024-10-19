import { useState } from "react";
import { useUser } from "../lib/context/user";
import { useIdeas } from "../lib/context/ideas";
import './Ideas.css';  // Import the CSS file

export function Ideas() {
  const user = useUser();
  const ideas = useIdeas();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      {user.current ? (
        <section className="ideas-form-container">
          <h2 className="ideas-form-title">Submit your Innovative Idea</h2>
          <form className="ideas-form">
            <input
              type="text"
              placeholder="Title"
              value={title}
              className="ideas-input"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            <textarea
              placeholder="Description"
              value={description}
              className="ideas-textarea"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
            <button
              type="button"
              className="ideas-submit-button"
              onClick={() =>
                ideas.add({ userId: user.current.$id, title, description })
              }
            >
              Submit Idea
            </button>
          </form>
        </section>
      ) : (
        <section className="ideas-login-message">
          <p>Please login to submit an idea.</p>
        </section>
      )}

      <section className="ideas-list-container">
        <h2 className="ideas-list-title">Latest Ideas Submitted by You</h2>
        <ul className="ideas-list">
          {ideas.current.map((idea) => (
            <li key={idea.$id} className="ideas-list-item">
              <strong className="ideas-list-item-title">{idea.title}</strong>
              <p className="ideas-list-item-description">{idea.description}</p>
              {user.current && user.current.$id === idea.userId && (
                <button
                  type="button"
                  className="ideas-remove-button"
                  onClick={() => ideas.remove(idea.$id)}
                >
                  Remove
                </button>
              )}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
