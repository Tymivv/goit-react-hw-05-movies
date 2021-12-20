import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react"
import { getSearchMovie } from '../servises/articlesApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as storage from "../../components/servises/localStorage";


const STORAGE_KEY = 'movies'

export const MoviesPage = () => {

    const [inputMovies, setInputMovies] = useState(storage.get(STORAGE_KEY)??'');
    const [data, setData] = useState([]);
    const location = useLocation()

    

    useEffect(() => {
        if (inputMovies) {
            setInputMovies(inputMovies);
            getMovies(inputMovies);
        }
    }, [inputMovies])

    const inputHandler = (e) => {
        setInputMovies(e.target.value);
    }

    const getMovies = async (inputMovies) => {
        try {
            const data = await getSearchMovie(inputMovies);
            setData(data.results);
        } catch (error) {
            console.log(error);
        }

    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (!inputMovies) {
        toast.error('Enter a movie title')
        return
        }; 
        
        localStorage.setItem(STORAGE_KEY, inputMovies);
        getMovies(inputMovies);

    }
console.log(inputMovies)
    return (
        <>
            <form onSubmit={submitHandler}  >
                <input onChange={inputHandler} type="text" />
                <button type='submit'>Search</button>
                <ToastContainer />
        </form>
        <ul >
        {data && data.map(mov => (
        <li key = {mov.id}> 
            <Link to={{
                pathname: `movies/${mov.id}`,
                state: {from: location}}} >
                <p  >{mov.title}</p>
            </Link>
        </li>
        ))}
            </ul>
            </>
    )
}
export default MoviesPage;
