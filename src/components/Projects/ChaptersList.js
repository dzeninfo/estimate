import Chapter from './Chapter';
import styles from './ChaptersList.module.css';

function ChaptersList(props) {
  const { chapters, addChapter } = props;
  return (
    <div className={styles.container}>
      {/* {chapters.map((chapter) => (
        <Chapter key={chapter.id} chapter={chapter} addChapter={addChapter} />
      ))} */}
    </div>
  );
}

export default ChaptersList;
