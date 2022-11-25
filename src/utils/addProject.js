import NewProject from '../components/NewProject';

function addProject() {
  const container = document.getElementById('project');
  container.append({ NewProject });
}

export default addProject;
