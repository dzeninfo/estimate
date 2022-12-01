import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import TableButtons from './components/TableButtons';
import Project from './components/Projects/Project';
import styles from './App.module.css';
import ProjectsList from './components/Projects/ProjectsList';

function App() {
  const [projects, setProjects] = useState([]);
  const addProjectHandler = () => {

    setProjects([...projects, <Project />]);
  };
  const [projectName, setProjectName] = useState('');
  const addProjectNameHandler = (text) => {
    setProjectName(text);
  };
  return (
    <div className={styles.App}>
      <Header />
      <div id="project" className={styles.container}>
        <TableButtons
          addProject={addProjectHandler}
          addProjectName={addProjectNameHandler}
        />
        <ProjectsList projects={projects}/>
        {/* <Project /> */}
        <>
          <h1>{projectName}</h1>
          <div>{projects}</div>
        </>
      </div>
    </div>
  );
}

export default App;
