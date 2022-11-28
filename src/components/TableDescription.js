import ButtonPlus from './ButtonPlus';
// import ProjectName from './ProjectName';
import styles from './TableDescription.module.css';
import { useState } from 'react';

function TableDescription(props) {
  const { addProject, addProjectName } = props;
  const [text, setText] = useState('');
  const onSubmitHandler = (event) => {
    event.preventDefault();
    addProjectName(text)
    setText('');
  };
  return (
    <section className={styles.container}>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <input
          className={styles.input}
          type="text"
          value={text}
          placeholder="Enter project name"
          onChange={(e) => setText(e.target.value)}
        />
        {/* <ProjectName
          placeholderText="Enter project name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        /> */}
        <ButtonPlus onClick={addProject} />
      </form>
    </section>
  );
}

export default TableDescription;
