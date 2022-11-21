import ButtonPlus from './ButtonPlus';
// import { useState } from 'react';
// import NewProject from './NewProject';
// import ProjectName from './ProjectName';
import addProject from '../utils/addProject';

function Header() {

  return (
    <header className="header">
      {/* <Menu /> */}
      <p className="project-title">Project Name</p>
      {/* <button className="button-plus" onClick={addProject}></button> */}
      <ButtonPlus onClick={addProject} classList="button-plus" />
    </header>
  );
}

export default Header;
