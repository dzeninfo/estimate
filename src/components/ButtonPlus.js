import styles from './ButtonPlus.module.css'

function ButtonPlus(props) {
  const { classList, onClick } = props;
  return <button className={styles.icon} onClick={onClick}></button>;
}

export default ButtonPlus;
