import Project from '../components/Project';

function addProject() {
  const container = document.getElementById('project');
  container.append({ Project });
}

export default addProject;
