import Header from './components/Header';
import TableDescription from './components/TableDescription';
import NewProject from './components/NewProject';
import styles from './App.module.css';

function App() {
  return (
    <div className={`${styles.App} ${styles.container}`}>
      <Header />
      <TableDescription />
      <NewProject />
    </div>
  );
}

export default App;
