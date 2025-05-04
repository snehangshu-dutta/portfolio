import { PROJECTS } from './data';
import PageTitle from '../../components/PageTitle';
import styles from './styles.module.scss';
import { BsArrowRight } from 'react-icons/bs';
const Projects = () => {
  return (
    <div className="container-lg">
      <div className="row">
        <PageTitle pageTitle="Projects" />
      </div>
      <div className={`row ${styles.projectWrapper}`}>
        {PROJECTS.map((project) => (
          <div className={`col-md-7 ${styles.project}`} key={project.id}>
            <p className={styles.projectTitle}>{project.title}</p>
            <p className={styles.projectDescription}>{project.description}</p>
            <a
              className="badge text-bg-primary"
              href={project.link}
              target="_blank"
            >
              Visit <BsArrowRight />
            </a>
            {/* <Link
                className="btn btn-sm btn-primary"
                to={`/projects/${project.id}`}
                key={project.id}
              >
                Details
              </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
