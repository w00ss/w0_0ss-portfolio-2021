import React from 'react';
import './Project.css';
import { projectData } from '../projectData';
import ProjectItem from '../components/ProjectItem';

function ProjectList() {
  return (
    <div className="project-list">
      {projectData.map((project) => (
        <ProjectItem key={project.id} data={project} />
      ))}
    </div>
  );
}

export default ProjectList;
