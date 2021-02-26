import data from './projectData.json';
import Project from './Project';
import './ProjectList.css';

function ProjectList({ onClick }) {
  const { projects } = data;
  return (
    <div className="project-list">
      {projects.map((project) => (
        <Project
          data={project}
          key={project.id}
          onClick={() => {
            onClick(project);
          }}
        />
      ))}
    </div>
  );
}

export default ProjectList;
