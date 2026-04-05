import { useEffect } from "react";
import { gsap } from "gsap";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import "./Projects.css";

export default function Projects() {
  
  useEffect(() => {
    // Smooth grid items reveal
    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="projects-section">
      {/* Background Orbs to match the theme */}
      <div className="projects-bg-orb orb-left"></div>
      <div className="projects-bg-orb orb-right"></div>

      <div className="projects-container">
        <h1 className="projects-title">
          My <span className="highlight">Projects</span> 🚀
        </h1>
        <p className="projects-subtitle">
          A showcase of my recent work in full-stack and frontend development.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}