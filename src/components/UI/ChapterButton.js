import { MdAddBox } from 'react-icons/md';
import styles from './ChapterButton.module.css';
function ChapterButton(props) {
	const {title, onClick} = props
  return (
    <>
      <div className={styles.button} onClick={onClick} title={title}>
        <MdAddBox className={styles.icon}/>
        chapter
      </div>
    </>
  );
}

export default ChapterButton;
