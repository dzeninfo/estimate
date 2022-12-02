import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Project.module.css';
import Chapter from './Chapter';
import Top from './Top';
import ChaptersList from './ChaptersList';

function Project(props) {
  // const {project} = props
  const [ chapters, setChapters ] = useState([<Chapter />]);
  console.log(chapters);
  

  const addChaptersHandler = () => {
    const newChapter = {
      // w: <Chapter />,
      // hasChapter: true,
      id: uuidv4(),
    };
    setChapters([...chapters, newChapter]);
  };

  return (
    <div className={styles.wrapper}>
      <Top />
      {/* <Chapter /> */}
      <ChaptersList chapters={chapters} addChapters={addChaptersHandler}/>
    </div>
  );
}

export default Project;
