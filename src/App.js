import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import MenuButtons from './components/MenuButtons';
import Project from './components/Projects/Project';
import styles from './App.module.css';
import ProjectsList from './components/Projects/ProjectsList';

function App() {
  const [projects, setProjects] = useState([]);
  
  const addProjectsHandler = () => {
    const newProject = {
      // project: <Project />,
      id: uuidv4(),
    };
    setProjects([...projects, newProject]);
  };

  const [projectName, setProjectName] = useState('');
  const addProjectNameHandler = (text) => {
    setProjectName(text);
  };

  return (
    <div className={styles.App}>
      <Header />
      <div id="project" className={styles.container}>
        <MenuButtons
          addProjects={addProjectsHandler}
          addProjectName={addProjectNameHandler}
        />
        <h1>{projectName}</h1>
        <ProjectsList projects={projects} />
      </div>
    </div>
  );
}

export default App;
