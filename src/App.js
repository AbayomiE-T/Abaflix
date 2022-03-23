import styles from './App.module.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMovies } from './store/actions/movie-actions';

import Header from './components/Navigation/Header';
import MovieList from './components/Movies/MovieList';
import LikedMovies from './components/Movies/LikedMovies';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [])

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
