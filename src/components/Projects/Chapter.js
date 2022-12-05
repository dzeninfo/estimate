import {
  MdDeleteForever,
  MdArrowUpward,
  MdArrowDownward,
  MdAddBox,
} from 'react-icons/md';
import AddButton from '../UI/AddButton';
import styles from './Chapter.module.css';

function Chapter(props) {
  const { chapter, addChapters, deleteChapters } = props;
  console.log(chapter)
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
            <AddButton
              title="Add new Chapter"
              text="Chapter"
              onClick={addChapters}
            />
            <AddButton title="Add new item" text="Item" />
            <MdArrowUpward className={styles.icon} />
            <MdArrowDownward className={styles.icon} />
            <MdDeleteForever
              className={styles.icon}
              onClick={() => deleteChapters(chapter.id)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Chapter;
