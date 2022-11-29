import { useState } from 'react';
import Header from './components/Header';
import Table from './components/Table';
import Project from './components/Project/Project';
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
        <Table
          addProject={addProjectHandler}
          addProjectName={addProjectNameHandler}
        />
        <>
          <h1>{projectName}</h1>
          <div>{project}</div>
        </>
      </div>
    </div>
  );
}

export default App;
