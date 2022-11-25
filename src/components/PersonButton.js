import styles from './PersonButton.module.css';

function PersonButton(props) {
  const { onClick } = props;
  return <i onClick={onClick} className={styles.icon}></i>;
}

export default PersonButton;
