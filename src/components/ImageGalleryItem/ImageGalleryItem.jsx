import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ articles }) => {
  const a = 'https://image.tmdb.org/t/p/w300';
  return articles.map(({ id, poster_path, backdrop_path }) => {
    return (
      <li className={styles.ImageGalleryItem} key={id} a={a + poster_path}>
        <img
          className={styles.ImageGalleryItemimage}
          src={a + backdrop_path}
          alt=""
        />
      </li>
    );
  });
};
export default ImageGalleryItem;
