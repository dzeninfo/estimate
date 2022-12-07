import AddButton from '../UI/AddButton';
import Chapter from './Chapter';
import styles from './ChaptersList.module.css';

function ChaptersList(props) {
  const { chapters, addChapters, deleteChapters } = props;

  return (
    <div className={styles.container}>
      {chapters.length === 0 && (
        <AddButton
          onClick={addChapters}
          textOnButton="Chapter"
          title="Add new Chapter"
        />
      )}
      {chapters.map((chapter, index) => (
        <Chapter
          index={index}
          chapter={chapter}
          key={chapter.id}
          addChapters={addChapters}
          deleteChapters={deleteChapters}
        />
      ))}
    </div>
  );
}

export default ChaptersList;
