import React from 'react';
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {/* Background Image is in a separate div so we can scale it on hover */}
      <div 
        className="project-bg-img" 
        style={{ backgroundImage: `url(${project.image})` }}
      ></div>

      {/* Futuristic Glassmorphism Content Area */}
      <div className="project-glass-overlay">
        
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-desc">{project.description}</p>
        </div>

        <div className="project-footer">
          <div className="tech-stack-pills">
            {project.tech.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>

          <div className="project-buttons">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-git">
              GitHub
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-live">
              Live Demo
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}