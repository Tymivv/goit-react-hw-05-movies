import { NavLink, Switch, Route, useParams, useRouteMatch} from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieById } from '../servises/articlesApi';
import Cast from './Cast';
import Reviews from './Reviews';
import styles from './Pages.module.css'




export const MovieDetailsPage = () => {

  const { id } = useParams();
  const [data, setData] = useState([]);
  const match = useRouteMatch();
  

    

    useEffect(() => {
        getMovies(id);
    }, [id])

    const getMovies = async (id) => {
        try {
            const data = await getMovieById(id);
            setData(data);
        } catch (error) {
            console.log(error);
        }

    }
console.log(data.genres);


  return (
    <>
      {data && (<div className={styles.item} >
        <img
            src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
            alt=""
className={styles.itemImg}
        />
        <div className={styles.itemText}>
        <h2>{data.original_title}</h2>
        <p>User score: { data.vote_average}</p>
        <h3>Overview</h3>
        <p>{data.overview}</p>
        <h3>Genres</h3>
        

        {data.genres && <p>{data.genres.map((genre) => genre.name).join(", ")}</p>}
        </div>
        </div>
         )}

<h4>Additional information</h4>
      <ul>
            <li>
              <NavLink to={`${match.url}/cast`} activeClassName="active">
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink to={`${match.url}/reviews`} activeClassName="active">
                Reviews
              </NavLink>
            </li>
          </ul>

          <Switch>
            <Route exact path={`${match.path}/cast`}>
              <Cast />
            </Route>
            <Route path={`${match.path}/reviews`}>
              <Reviews />
            </Route>
          </Switch>
          </>
      
      )
        
}
export default MovieDetailsPage;
