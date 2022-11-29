import styles from './Top.module.css'

function Top() {
  return (
    <>
      <div className={styles.top}>
        <div className={styles.column}>
          <div className={styles.item}>#</div>
        </div>
        <div className={styles.column}>
          <div className={styles.item}>Cost item</div>
        </div>
        <div className={styles.column}>
          <div className={styles.item}>Qty</div>
        </div>
        <div className={styles.column}>
          <div className={styles.item}>unit</div>
        </div>
        <div className={styles.column}>
          <div className={styles.item}>
            <span className={styles.bg}>cost</span>
          </div>
          <div className={styles.df}>
            <div className={styles.item}>per unit</div>
            <div className={styles.item}>overall</div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.item}>Where buy</div>
        </div>
      </div>
    </>
  );
}

export default Top;
