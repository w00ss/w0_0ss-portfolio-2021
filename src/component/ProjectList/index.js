import data from './projectData.json';
import Project from './Project';
import './ProjectList.css';

function ProjectList({ onClick }) {
  const { projects } = data;
  return (
    <div className="project-list">
      {projects.map((project) => (
        <Project
          key={project.id}
          data={project}
          onClick={() => {
            onClick(project);
          }}
        />
      ))}
    </div>
  );
}

export default ProjectList;
