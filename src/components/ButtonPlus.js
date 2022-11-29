import styles from './ButtonPlus.module.css';

function ButtonPlus(props) {
  const { onClick } = props;
  return (
    <button className={styles.icon} type="submit" onClick={onClick}></button>
  );
}

export default ButtonPlus;
