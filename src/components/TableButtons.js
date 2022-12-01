import ButtonPlus from './ButtonPlus';
// import ProjectName from './ProjectName';
import styles from './TableButtons.module.css';
import { useState } from 'react';
import ChapterButton from './UI/ChapterButton';

function TableButtons(props) {
  const { addProject, addProjectName } = props;
  const [text, setText] = useState('');
  const onSubmitHandler = (event) => {
    event.preventDefault();
    addProjectName(text);
    setText('');
  };
  return (
    <section className={styles.container}>
      <form className={styles.formName} onSubmit={onSubmitHandler}>
        <input
          className={styles.input}
          type="text"
          value={text}
          placeholder="Enter project name"
          onChange={(e) => setText(e.target.value)}
        />
        <ButtonPlus title="Add Project Name" onClick={addProject} />
      </form>
      <ChapterButton title="Add chapter"/>
    </section>
  );
}

export default TableButtons;
