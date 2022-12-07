import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import MenuButtons from './components/UI/MenuButtons';
import styles from './App.module.css';
import ProjectsList from './components/Projects/ProjectsList';

function App() {
  const [projects, setProjects] = useState([]);
  
  const addProjectsHandler = () => {
    const newProject = {
      // project: <Project />,
      id: uuidv4(),
    };
    setProjects([newProject]);
  };

  const [projectName, setProjectName] = useState('New project');
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
