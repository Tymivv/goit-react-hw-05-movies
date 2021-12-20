import { Link, useLocation } from "react-router-dom";
import { getTrendingMovies } from '../servises/articlesApi'
import { useState, useEffect } from "react"

const HomePage = () => {

  const [data, setData] = useState([])
  const location = useLocation()
    
    const getMovies = async () => {
        try {
            const data = await getTrendingMovies()
            setData(data.results)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMovies()
    }, [])
  
    return (
          <ul >
        {data.map(mov => (
        <li key = {mov.id}> 
            <Link to={{
                pathname: `movies/${mov.id}`,
                state: {from: location}}} >
                <p  >{mov.title}</p>
            </Link>
          </li>
          ))}
        </ul>
    )
}

export default HomePage;
