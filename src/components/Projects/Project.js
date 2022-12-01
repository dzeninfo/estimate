import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Project.module.css';
import Chapter from './Chapter';
import Top from './Top';
import ChaptersList from './ChaptersList';

function Project(props) {
  const {project} = props
  const { chapters, setChapters } = useState([]);

  const addChapterHandler = (chap) => {
    const newChapter = {
      chap: chap,
      hasChapter: true,
      id: uuidv4(),
    };
    setChapters([...chapters, newChapter]);
  };

  return (
    <div className={styles.wrapper}>
      <Top />
      {/* <Chapter /> */}
      <ChaptersList chapters={chapters} addChapter={addChapterHandler} />
    </div>
  );
}

export default Project;
