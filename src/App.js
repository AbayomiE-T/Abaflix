import styles from './App.module.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Navigation/Header';
import MovieList from './components/Movies/MovieList';
import LikedMovies from './components/Movies/LikedMovies';

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <MovieList />
          </Route>
          <Route path="/liked">
            <LikedMovies />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
