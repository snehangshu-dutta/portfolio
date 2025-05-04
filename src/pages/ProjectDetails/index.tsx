import { useParams } from 'react-router-dom';
import { PROJECTS } from '../Projects/data';

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectId ? PROJECTS[+projectId - 1] : PROJECTS[0];

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text">{project.description}</p>
          <a href={project.link} target="_blank" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
