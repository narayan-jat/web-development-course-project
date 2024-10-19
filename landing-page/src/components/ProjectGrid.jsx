import React from 'react';
import '../styles/ProjectGrid.css';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'This is the description for project one.',
    image: 'https://via.placeholder.com/300x200.png?text=Project+One',
    link: '#',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'This is the description for project two.',
    image: 'https://via.placeholder.com/300x200.png?text=Project+Two',
    link: '#',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'This is the description for project three.',
    image: 'https://via.placeholder.com/300x200.png?text=Project+Three',
    link: '#',
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'This is the description for project four.',
    image: 'https://via.placeholder.com/300x200.png?text=Project+Four',
    link: '#',
  },
];

const ProjectGrid = () => {
  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`project-item ${index % 2 === 0 ? 'image-left' : 'image-right'}`}
        >
          <div className="project-content">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-text">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} className="visit-button">Visit</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
