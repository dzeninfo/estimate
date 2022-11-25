import { useState } from 'react';
import ButtonPlus from './ButtonPlus';
import addProject from '../utils/addProject';
import Login from './Login';
import Title from './Title';
import PersonButton from './PersonButton';
import styles from './Header.module.css';

function Header() {
  const [active, setActive] = useState(false);
  const changeActive = () => {
    setActive(true);
  };

  return (
    <header className={styles.header}>
      {/* <Menu /> */}
      <Title />
      <Login active={active} />
      <div className={styles.buttons}>
        <PersonButton onClick={changeActive}/>
        <ButtonPlus onClick={addProject} classList="button-plus" />
      </div>
    </header>
  );
}

export default Header;
