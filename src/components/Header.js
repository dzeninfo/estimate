import ButtonPlus from './ButtonPlus';
// import { useState } from 'react';
// import NewProject from './NewProject';
import ProjectName from './ProjectName';
import addProject from '../utils/addProject';
import Login from './Login';

function Header() {
  return (
    <header className="header">
      {/* <Menu /> */}
      {/* <p className="project-title">Project Name</p> */}
      <ProjectName classList="project-name-input" placeholder="ProjectName"/>
      <Login classList="project-name-input" />
      <ButtonPlus onClick={addProject} classList="button-plus" />
    </header>
  );
}

export default Header;
