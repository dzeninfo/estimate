import { MdAddBox } from 'react-icons/md';
import styles from './AddButton.module.css'
function AddButton(props) {
	const {title, onClick, text} = props
  return (
    <>
      <div className={styles.button} onClick={onClick} title={title}>
        <MdAddBox className={styles.icon}/>
        {text}
      </div>
    </>
  );
}

export default AddButton;
