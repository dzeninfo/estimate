import styles from './Login.module.css';
// import { useState } from 'react';

function Login(props) {
  const { active } = props;

  return active ? (
    <>
      <form className={styles.form}>
        <i className={styles.close}></i>
        <div className={styles.box}>
          <label className={styles.lable}>Username</label>
          <input className={styles.input} type="text" name="username" />
        </div>
        <div className={styles.box}>
          <label className={styles.lable}>Password</label>
          <input className={styles.input} type="password" name="password" />
        </div>
      </form>
    </>
  ) : (
    <></>
  );
}

export default Login;
