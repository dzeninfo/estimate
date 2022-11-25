import { useState } from 'react';
import Header from './components/Header';
import TableDescription from './components/TableDescription';
import NewProject from './components/NewProject';
import styles from './App.module.css';
import addProject from './utils/addProject';
import ButtonPlus from './components/ButtonPlus';

function App() {
  const [project, setProject] = useState([]);
  const adProject = () => {
    setProject(project.push(<NewProject />));
  };
  return (
    <div className={styles.App}>
      <Header />
      <div id="project" className={styles.container}>
        <TableDescription />
        <ButtonPlus onClick={adProject} />
        <NewProject />
        {project}
      </div>
    </div>
  );
}

export default App;
