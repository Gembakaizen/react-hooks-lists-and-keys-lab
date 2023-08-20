import React from "react";
import ProjectList from "./ProjectList";

function ProjectItem({ project }) {
  return (
    <div className="project-item">
      <h3>{project.name}</h3>
      <p>{project.about}</p>
      <div>
        <strong>Technologies:</strong>
        <ul>
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default ProjectItem;