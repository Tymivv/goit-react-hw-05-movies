import { useParams, } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieReviews } from '../servises/articlesApi';

import styles from './Pages.module.css'



const Reviews = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  
  

    

    useEffect(() => {
        getMovies(id);
    }, [id])

    const getMovies = async (id) => {
        try {
            const data = await getMovieReviews(id);
            setData(data);
        } catch (error) {
            console.log(error);
        }

    }
console.log(data.results);
  
  return (
    <div className={styles.itemText}>
      {data.results && data.results.map((res) => (
      <div key={res.id}>
          <h3>author: {res.author}</h3>
          <p>{res.content}</p>
      </div>
      ))}
    </div>
  );
}


export default Reviews;