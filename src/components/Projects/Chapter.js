import {
  MdDeleteForever,
  MdArrowUpward,
  MdArrowDownward,
  MdAddBox,
} from 'react-icons/md';
import ChapterButton from '../UI/ChapterButton';
import styles from './Chapter.module.css';

function Chapter(props) {
  const {chapter, addChapter} = props
  return (
    <>
      <div className={styles.chapter}>
        <div className={styles.column}>
          <div className={styles.item}>1</div>
        </div>
        <div className={styles.column}>
          <div className={styles.block}>
            <details className={styles.details}>
              <summary>Chapter:</summary>
            </details>
            <input
              className={styles.input}
              type="text"
              placeholder="New chapter"
            />
          </div>
          <div className={styles.row}>
            <ChapterButton onClick={addChapter} chapter={chapter}/>
            <div className={styles.addButton}>
              <MdAddBox className={styles.icon} />
              item
            </div>
            <MdArrowUpward className={styles.icon} />
            <MdArrowDownward className={styles.icon} />
            <MdDeleteForever className={styles.icon} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Chapter;
