import AddButton from '../UI/AddButton';
import Chapter from './Chapter';
import styles from './ChaptersList.module.css';

function ChaptersList(props) {
  const { chapters, addChapters } = props;
  console.log(chapters);

  return (
    <div className={styles.container}>
      {/* <Chapter /> */}
      {chapters.length === 0 && <AddButton addChapters={addChapters}/>}
      {chapters.map((chapter) => (
        <Chapter key={chapter.id} addChapters={addChapters}/>
      ))}
    </div>
  );
}

export default ChaptersList;
