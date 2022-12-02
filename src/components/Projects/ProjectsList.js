import Project from './Project';
import styles from './ProjectsList.module.css';

function ProjectsList(props) {
  const { projects } = props;

  return (
    <div className={styles.container}>
      {projects.length === 0 && <h2>Here will be your estimate soon</h2>}
      {projects.map((project) => (
        <Project key={project.id} />
      ))}
    </div>
  );
}

export default ProjectsList;
