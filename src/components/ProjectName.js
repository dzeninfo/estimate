import styles from './ProjectName.module.css'

function ProjectName(props) {
  const {placeholderText } = props;

  return (
    <>
      <input className={styles.input} type="text" placeholder={placeholderText} />
    </>
  );
}

export default ProjectName;
