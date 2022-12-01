import Project from './Project';
import styles from './ProjectsList.module.css'

function ProjectsList(props) {
	const {projects} = props
	console.log(projects);
	
	return (
		<div className={styles.container}>

		</div>
	)
}

export default ProjectsList;