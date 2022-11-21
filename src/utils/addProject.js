// import { useState } from 'react';
import NewProject from '../components/NewProject';

function addProject() {

  const container = document.getElementById('app-container');
  container.append({NewProject});
}

export default addProject;
