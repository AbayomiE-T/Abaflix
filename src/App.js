import styles from './App.module.css';
import Header from './components/Navigation/Header';

function App() {
  return (
    <div className={styles.app}>
      <Header></Header>
    </div>
  );
}

export default App;
