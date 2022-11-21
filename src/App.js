// import { useState } from 'react';
import './css/normalize.css';
import './css/App.css';
import Title from './components/Title';
import Header from './components/Header';
import NewProject from './components/NewProject';

function App() {
  // const [projectList, setProjectList] = useState([]);
  // const addProject = () => {
  //   setProjectList(projectList.concat(<NewProject />))
  // }
  return (
    <div className="App">
      <Header />
      <div id="app-container" className="container">
        <section className="table-description">
          <Title />
        </section>
        {/* {projectList} */}
        {/* <button className='button-add' onClick={addProject}></button> */}
        <NewProject />
      </div>
    </div>
  );
}

export default App;
