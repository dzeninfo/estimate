import { useState } from 'react';
import addProject from '../utils/addProject';

function NewProject() {
  // const [project, setNewProject] = useState(<div>ddd</div>);
  // const addNewProject = () => {
  //   setNewProject(<div>ttt</div>)
  // }
  const project = (
    <div className="new-project-wrapper">
      <h2>test</h2>
    </div>
  );
  return project;
  // return (
  //   <div className="new-project-wrapper">
  //     <h2>test</h2>
  //   </div>
  // );
}

export default NewProject;
