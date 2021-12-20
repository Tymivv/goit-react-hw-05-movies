import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react"
import { getSearchMovie } from '../servises/articlesApi'

const STORAGE_KEY = 'input'

export const MoviesPage = () => {

    const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState([]);
    const input = localStorage.getItem(STORAGE_KEY);
      const location = useLocation()

    

    useEffect(() => {
        if (input) {
            setInputValue(input);
            getMovies(input);
        }
    }, [input])

    const inputHandler = (e) => {
        setInputValue(e.target.value);
    }

    const getMovies = async (input) => {
        try {
            const data = await getSearchMovie(input);
            setData(data.results);
        } catch (error) {
            console.log(error);
        }

    }

    const submitHandler = (e) => {
        e.preventDefault();
        //localStorage.setItem(STORAGE_KEY, inputValue);
        getMovies(inputValue);

    }

    return (
        <>
            <form onSubmit={submitHandler}  >
                <input onChange={inputHandler} type="text"  placeholder={input ? input : 'Enter movie name..'} />
                <button type='submit'>Search</button>
        </form>
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
            </>
    )
}
export default MoviesPage;
