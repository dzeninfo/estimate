import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Project.module.css';
import Top from './Top';
import ChaptersList from './ChaptersList';

function Project(props) {
  // const {} = props
  const [chapters, setChapters] = useState([]);

  const addChaptersHandler = () => {
    const newChapter = {
      // hasChapter: true,
      id: uuidv4(),
    };
    setChapters([...chapters, newChapter]);
  };

  const deleteChaptersHandler = (id) => {
    setChapters(chapters.filter((chapter) => chapter.id !== id));
  };

  return (
    <div  className={styles.wrapper}>
      <Top />
      <ChaptersList
        chapters={chapters}
        addChapters={addChaptersHandler}
        deleteChapters={deleteChaptersHandler}
      />
    </div>
  );
}

export default Project;
