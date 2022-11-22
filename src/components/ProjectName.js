// import { useState } from 'react';

function ProjectName(props) {
  const { classList } = props;
  // const { placeholderText, setText } = useState('Project Name');

  return (
    <>
      <input className={classList} type="text" placeholder="Project Name" />
    </>
  );
}

export default ProjectName;
