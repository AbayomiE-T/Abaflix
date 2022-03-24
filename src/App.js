import styles from './App.module.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMovies } from './store/actions/movie-actions';

import Header from './components/Navigation/Header';
import LikedMovies from './components/Movies/LikedMovies';
import MovieDetail from './components/Movies/MovieDetail';
import Movies from './components/Movies/Movies';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch])

  return (
    <Router>
      <div className={styles.app}>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Movies />
          </Route>
          <Route path="/liked">
            <LikedMovies />
          </Route>
          <Route path="/detail/:id">
            <MovieDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
