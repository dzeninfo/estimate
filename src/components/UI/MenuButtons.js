import ButtonPlus from './ButtonPlus';
import styles from './MenuButtons.module.css';
import { useState } from 'react';
import AddButton from './AddButton';

function MenuButtons(props) {
  const { addProjects, addProjectName } = props;
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
        <ButtonPlus title="Add Project Name" />
      </form>
      <AddButton textOnButton="Project" title="Add new project" onClick={addProjects} />
      <AddButton textOnButton="Chapter" title="Add new chapter" onClick={addProjects}/>
    </section>
  );
}

export default MenuButtons;
