import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Tic-Tac-Toe Game",
    description: "React-based fun tic-tac-toe game.",
    link: "https://9sreerag7.github.io/tic-tac-toe/",
    github: "https://github.com/9sreerag7/tic-tac-toe"
  },
  {
    title: "To-Do List",
    description: "Sleek to-do app using React hooks.",
    link: "https://9sreerag7.github.io/todo-list/",
    github: "https://github.com/9sreerag7/todo-list"
  },
  {
    title: "Portfolio",
    description: "This animated dark-themed portfolio site.",
    link: "https://9sreerag7.github.io/portfolio-t/",
    github: "https://github.com/9sreerag7/portfolio-t"
  }
];

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              {/* Front */}
              <div className="flip-card-front">
                <h3 className="project-title">{project.title}</h3>
                <p>{project.description}</p>
              </div>
              {/* Back */}
              <div className="flip-card-back">
                <h3 className="project-title">{project.title}</h3>
                <a href={project.link} target="_blank" rel="noreferrer">🔗 Live</a>
                <a href={project.github} target="_blank" rel="noreferrer">💻 Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
