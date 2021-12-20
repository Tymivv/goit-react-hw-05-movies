import { lazy, Suspense } from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// import Navigation from '../Navigation/Navigation';
// import HomePage from '../Pages/HomePage';
// import MoviesPage from '../Pages/MoviesPage';
// import MovieDetailsPage from '../Pages/MovieDetailsPage';
const Navigation = lazy(() =>import('../Navigation/Navigation' /* webpackChunkName: "Navigation" */),
);
const HomePage = lazy(() =>import('../Pages/HomePage' /* webpackChunkName: "HomePage" */),
);
const MovieDetailsPage = lazy(() =>import('../Pages/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */),
);
const MoviesPage = lazy(() =>import('../Pages/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Suspense fallback={<Loader
          type="ThreeDots"
          color="#d35050"
          height={100}
          width={100}
          timeout={3000}
        />}>  
      <Navigation />

       <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/homepage" />}
        ></Route>
        <Route path="/movies/:id">
          <MovieDetailsPage />
        </Route>
        <Route path="/homepage">
          <HomePage />
        </Route>
        <Route path="/movies">
          <MoviesPage />
        </Route>
      </Switch>
    </Suspense>
  

      </BrowserRouter>
    </>
);
};

export default App;
