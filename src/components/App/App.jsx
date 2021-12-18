import { Route, Link, Switch } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import { BrowserRouter } from 'react-router-dom';
import MoviesPage from '../Pages/MoviesPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'/movies'}>Movies</Link>
        </nav>
        <Switch>
          {/* <Route path={'/'} exact component={HomePage} />

        <Route path="/movies">
          <MoviesPage />
        </Route> */}

          {/* <Route path={'/:categoryId/:brandName'}>
          <BrandPage />
        </Route>
        <Route
          path={'/:categoryId'}
          render={routerProps => (
            <CategoryPage {...routerProps} categoryName="tShorts" />
          )}
        /> */}
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
