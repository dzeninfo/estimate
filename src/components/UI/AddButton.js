import { MdAddBox } from 'react-icons/md';
import styles from './AddButton.module.css'
function AddButton(props) {
	const {title, onClick, textOnButton} = props
  return (
    <>
      <div className={styles.button} onClick={onClick} title={title}>
        <MdAddBox className={styles.icon}/>
        {textOnButton}
      </div>
    </>
  );
}

export default AddButton;
