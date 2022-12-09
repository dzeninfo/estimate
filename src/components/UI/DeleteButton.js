import { MdDeleteForever } from 'react-icons/md';
import styles from './DeleteButton.module.css';

function DeleteButton(props) {
  const { title } = props;
  return (
    <div className={styles.container} title={title}>
      <MdDeleteForever className={styles.icon} />
    </div>
  );
}

export default DeleteButton;
