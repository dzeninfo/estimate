import ProjectName from './ProjectName';
import styles from './TableDescription.module.css';

function TableDescription() {
  return (
    <section className={styles.container}>
      <ProjectName placeholderText="Project name" />
    </section>
  );
}

export default TableDescription;
