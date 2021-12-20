import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieCredits } from '../servises/articlesApi';
import styles from './Pages.module.css'






const Cast = () => {

  const { id } = useParams();
  const [data, setData] = useState([]);
  
  

    

    useEffect(() => {
        getMovies(id);
    }, [id])

    const getMovies = async (id) => {
        try {
            const data = await getMovieCredits(id);
            setData(data);
        } catch (error) {
            console.log(error);
        }

    }
  
  return (
    <div  className={styles.itemText}>
      {data.cast && data.cast.map((cast1) => (
        <div key={cast1.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${cast1.profile_path} `}
            alt={cast1.name}
            width="100px"
          />
          <h3>{cast1.name}</h3>
          <p>{cast1.character}</p>
        </div>
      ))}
    </div>
  );
}

export default Cast;