import styles from './ButtonPlus.module.css';

function ButtonPlus(props) {
  const { onClick, title } = props;
  return (
    <button className={styles.icon} type="submit" onClick={onClick} title={title}></button>
  );
}

export default ButtonPlus;
