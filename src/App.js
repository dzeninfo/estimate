import './css/normalize.css';
import './css/App.css';
import Title from './components/Title';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <section className="table-description">
          <Title />
        </section>
      </div>
    </div>
  );
}

export default App;
