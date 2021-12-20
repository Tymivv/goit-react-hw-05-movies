import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieCredits } from '../servises/articlesApi';





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
     <>
      {data.cast && data.cast.map((cast1) => (
        <div key={cast1.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${cast1.profile_path} `}
            alt=""
            width="70px"
          />
          <h3>{cast1.name}</h3>
          <p>{cast1.character}</p>
        </div>
      ))}
    </>
  );
}

export default Cast;