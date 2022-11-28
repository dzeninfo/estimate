import { useState } from 'react';
import Login from './Login';
import Title from './Title';
import PersonButton from './PersonButton';
import styles from './Header.module.css';

function Header(props) {
  const [active, setActive] = useState(false);
  const changeActive = () => {
    if (active === false) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Title />
      </div>
      <div className={styles.login}>
        <Login active={active} />
      </div>
      {/* <Menu /> */}
      <div className={styles.buttons}>
        <PersonButton onClick={changeActive} />
      </div>
    </header>
  );
}

export default Header;
