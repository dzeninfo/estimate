import styles from './ProjectName.module.css';

function ProjectName(props) {
  const { value, onChange, placeholderText } = props;
  return (
    <>
      <input
        className={styles.input}
        type="text"
        value={value}
        placeholder={placeholderText}
        onChange={onChange}
      />
    </>
  );
}

export default ProjectName;
