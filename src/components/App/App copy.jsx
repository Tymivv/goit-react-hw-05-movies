// import { useState, useEffect } from 'react';
// import Searchbar from '../Searchbar/Searchbar';
// import Modal from '../Modal/Modal';
// import ImageGallery from '../ImageGallery/ImageGallery';
// import Button from '../Button/Button';
// import styles from './App.module.css';
// import fetchData from '../servises/articlesApi';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Loader from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// const App = ({ openModal }) => {
//   const [articles, setArticles] = useState([]);
//   const [loader, setLoader] = useState(false);
//   const [error, setError] = useState(null);
//   const [image, setImage] = useState('');
//   const [page, setPage] = useState(1);

//   const handleFormSubmit = image => {
//     setImage(image);
//     console.log(image);
//   };

//   useEffect(() => {
//     if (image === '') return;
//     apiRequest();
//   }, [image, page]);

//   const nextPages = () => {
//     setPage(prevPage => prevPage + 1);
//   };

//   const apiRequest = async () => {
//     setLoader(true);
//     try {
//       const newArticles = await fetchData(image, page);
//       setArticles([...articles, ...newArticles.results]);
//       return newArticles.results;
//     } catch (error) {
//       toast.warn(`${error.message}`);
//     } finally {
//       setLoader(false);

//       if (articles.length === 0 && image === '') {
//         toast.error('Картинок ненайдено');
//       }
//     }
//   };

//   return (
//     <div className={styles.SearchForminput}>
//       <Searchbar onSubmit={handleFormSubmit} />
//       {openModal && <Modal img={articles.largeImageURL} />}
//       {error && <p>Whoops, something went wrong: {error.message}</p>}
//       {loader && (
//         <Loader
//           type="ThreeDots"
//           color="#d35050"
//           height={100}
//           width={100}
//           timeout={3000}
//         />
//       )}
//       {articles.length > 0 && <ImageGallery articles={articles} />}
//       {articles.length > 0 && <Button image={image} onClick={nextPages} />}
//       <ToastContainer autoClose={2000} />
//     </div>
//   );
// };

// export default App;
