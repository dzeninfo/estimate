import { useState } from 'react';
import Header from './components/Header';
import TableDescription from './components/TableDescription';
import Project from './components/Project';
import styles from './App.module.css';

function App() {
  const [project, setProject] = useState('');
  const addProjectHandler = () => {
    setProject(<Project />);
  };
  const [projectName, setProjectName] = useState('');
  const addProjectNameHandler = (text) => {
    setProjectName(text);
  };
  return (
    <div className={styles.App}>
      <Header />
      <div id="project" className={styles.container}>
        <TableDescription
          addProject={addProjectHandler}
          addProjectName={addProjectNameHandler}
        />
        <div>
          <h1>{projectName}</h1>
          <div>{project}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
